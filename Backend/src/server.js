import express from "express";

const app = express();

const PORT = process.env.PORT;




app.listen(PORT, () =>  {
  console.log("server running on port: 3000");
}).on("error", (error) => {
  consle.log("Failed to start server", error);
})





