import mongo from './services/mongo'
import express, { Express, Request, Response } from 'express'

const app: Express = express()

/// Application endpoints
app.get('/', (_: Request, res: Response) => res.send('It works'))
app.use('*', (_: Request, res: Response) => res.status(404).send('Not found'))

/// Http server configuration
const host: string = process.env.HOST || '0.0.0.0'
const port: number = parseInt(process.env.PORT || '8080')
const external: number = parseInt(process.env.EXTERNAL_PORT || '0')

/// The server is really ready to accept traffic when it is capable
/// of accessing services such as database, cache, session, etc...
const main: Function = async () => {
  await mongo.connect()

  /// Start listening connections
  app.listen(port, host, () => {
    console.log('App running at http://%s:%d', host, port)
    if (external) console.log('Exposing via %d port', external)
  })
}

main()
