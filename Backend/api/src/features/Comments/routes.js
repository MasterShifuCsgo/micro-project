import { Router } from 'express'
import createComment from './createComment.js'
import getComment from './getComments.js'
import getCommentCount from './getCommentCount.js'

export default function CreateCommentsRoutes() {
  const routes = Router()
  routes.get('/', getComment)
  routes.get('/count', getCommentCount)
  routes.post('/', createComment)
  return routes
}
