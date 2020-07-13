import { Router } from 'express'
import { apply } from './http/middleware'
import controllers from './http/controller'

const router: Router = Router()

router.post('/login', ...apply(['guest']), controllers.auth.login)

export default router
