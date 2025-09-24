import { Router } from "express";
import createComment from "./createComment.js";
import getComment from "./getComments.js";


export default function CreateCommentsRoutes() {
  const routes = Router();
  routes.get("/", getComment)
  routes.post("/", createComment)
  return routes;
}




