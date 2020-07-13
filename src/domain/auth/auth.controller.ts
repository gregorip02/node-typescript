import { Request, Response } from 'express'

export default class LoginController {
  public static async login (req: Request, res: Response) {
    res.send('Autenticando...')
  }
}
