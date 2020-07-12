import { Request, Response, RequestHandler, NextFunction as Next} from 'express'

export const guest: RequestHandler = (req: Request, res: Response, next: Next) => {
  console.info('Aplicando el middleware guest')
  next()
}

export const auth: RequestHandler = (req: Request, res: Response, next: Next) => {
  console.info('Aplicando el middleware auth')
  next()
}
