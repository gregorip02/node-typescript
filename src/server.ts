import mongo from './services/mongo'
import session from './services/session'
import logger from './logger'
import express, { Express, Request, Response } from 'express'

const app: Express = express()

// Application middlewares
app.use(express.json())
app.use(session)

/// Application endpoints
app.get('/', (_: Request, res: Response) => res.send('It works'))
app.use('*', (_: Request, res: Response) => res.status(404).send('Not found'))

/// Http server configuration
const host: string = process.env.HOST || '0.0.0.0'
const port: number = parseInt(process.env.PORT || '8080')
const external: number = parseInt(process.env.EXTERNAL_PORT || port.toString())

/// The server is really ready to accept traffic when it is capable
/// of accessing services such as database, cache, session, etc...
const main: Function = async () => {
  await mongo.connect()

  /// Start listening connections
  app.listen(port, host, () => {
    logger.info(`Running at http://${host}:${port}`)
    if (external) logger.info(`External port is defined as ${external}`)
  })
}

main()
