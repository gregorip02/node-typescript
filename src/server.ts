import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('It works')
})

const port: number = 8080
const host: string = 'localhost'

app.listen(port, host, () => {
  console.log('Appp running at http://%s:%d', host, port)
})
