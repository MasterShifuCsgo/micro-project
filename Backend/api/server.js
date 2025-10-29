import dotenv from 'dotenv'
dotenv.config({path: '../../.env'})
import express from 'express'
import cors from 'cors'
import CreateCommentsRoutes from './src/features/Comments/routes.js'

const app = express()
const PORT = process.env.PORT

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use(express.json())

app.use((req, res, next) => {
  const oldSend = res.send

  res.send = function (body) {
    // Only log once, after Express has converted objects to JSON    
    if (typeof body === 'object') {      
      console.log(`\nHTTP REQUEST: ${req.method} ${req.originalUrl}`);             
      console.log('Request Body:', req.body);            
      console.log('Request Query:', req.query);      
      console.log('Response:', body);      
    }
    return oldSend.call(this, body);
  };

  next();
});


app.use('/comment', CreateCommentsRoutes())

app
  .listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
  })
  .on('error', (error) => {
    console.log('Failed to start server', error)
  })
