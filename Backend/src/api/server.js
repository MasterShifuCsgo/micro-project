import express from "express";
import CreateCommentsRoutes from "./feature/Comments/routes.js";

const app = express();

const PORT = process.env.PORT;

app.use("/comments", CreateCommentsRoutes);

app.listen(PORT, () =>  {
  console.log("server running on port: 3000");
}).on("error", (error) => {
  consle.log("Failed to start server", error);
})





