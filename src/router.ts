import { Router, Request, Response } from 'express'
import { apply } from './http/middleware'

const router: Router = Router()

router.post('/login', ...apply(['guest']), (_: Request, res: Response) => {
  res.send('Hello!!')
})

export default router
