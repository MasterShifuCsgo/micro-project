import { Router } from "express";
import createComment from "./Create/createComment";
import getComment from "./Get/getComments";


export default function CreateCommentsRoutes() {
  const routes = Router();
  routes.get("?tunni_nimetus", getComment)
  routes.post("?tunni_nimetus", createComment)
  return routes;
}







