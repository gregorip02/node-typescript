import client from './redis'
import express from 'express'
import connect from 'connect-redis'
import session from 'express-session'

// Use redis has session store manager
const RedisStore: connect.RedisStore = connect(session)

// Base redis session
const sessionOptions: session.SessionOptions = {
  store: new RedisStore({ client }),
  rolling: true,
  resave: false,
  saveUninitialized: false,
  name: process.env.SESSION_NAME || 'app.sid',
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  cookie: {
    sameSite: true,
    maxAge: 1000 * 60 * 10,
    secure: process.env.NODE_ENV === 'production'
  }
};

// Configure redis-session storage
export default session(sessionOptions) as express.RequestHandler
