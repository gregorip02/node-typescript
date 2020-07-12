import redis from 'redis'
import logger from '../logger'

// Split redis client options
const options: redis.ClientOpts = {
  host: process.env.REDIS_HOST || '0.0.0.0',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD || 'keyboard cat'
};

// Create a redis client based on environment
const client: redis.RedisClient = redis.createClient(options)

// Handle client errors
client.on('error', (err) => {
  logger.error(`Error connecting with redis server\n ${err}`)
  process.exit(1)
})

export default client
