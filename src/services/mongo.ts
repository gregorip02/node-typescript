import mongoose from 'mongoose'
import logger from '../logger'

/// Handle error connections
mongoose.connection.on('error', (err) => {
  logger.error(`Error connecting with MongoDB\n ${err}`)
  process.exit(1)
})

/// Notify when we make connection attempts with MongoDB
mongoose.connection.on('connected', () => logger.info('Connected with mongo'))
mongoose.connection.on('connecting', () => logger.info('Connecting with mongo'))

/// Create async function for connect with mongo
export const connect: Function = async () => {
  const {
    MONGODB_USERNAME: user,
    MONGODB_PASSWORD: pass,
    MONGODB_DATABASE,
    MONGODB_LINK
  } = process.env

  // We try to connect with MongoDB
  await mongoose.connect(`mongodb://${MONGODB_LINK}/${MONGODB_DATABASE}`, {
    user,
    pass,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

/// Exporting connection status
export const connection: mongoose.Connection = mongoose.connection

export default {
  connect, connection
}
