import dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from "cors"
import CreateCommentsRoutes from "./src/features/Comments/routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: "http://localhost:5723"
}));
app.use(express.json());


app.use("/comments", CreateCommentsRoutes());

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
}).on("error", (error) => {
  consle.log("Failed to start server", error);
})


