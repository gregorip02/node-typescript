import { RequestHandler } from 'express'
import { guest as guestHandler } from '../domain/auth/auth.middleware'

// For pre-register middlewares on application
interface MiddlewareCandidate {
  name: String,
  handler: RequestHandler
}

// All aplication middlewares
const middlewareRegistry: Array<MiddlewareCandidate> = [
  {
    name: 'guest',
    handler: guestHandler
  }
]

// Middleware service provider
export const provider: Map<String, RequestHandler> = new Map<String, RequestHandler>()

// Register all middlewares in the provider
middlewareRegistry.forEach((candidate: MiddlewareCandidate) => {
  // Prevent duplication of middlewares registration
  if (! provider.has(candidate.name)) {
    provider.set(candidate.name, candidate.handler)
  }
})

// Get an array of request handler by middleware candidate names.
export const apply: Function = (names: Array<String> = []): Array<RequestHandler> => {
  const middlewares = (new Set(names)).values()

  return Array.from(middlewares)
    .filter(name => provider.has(name))
    .map(name => provider.get(name) as RequestHandler)
}

export default {
  apply,
  provider
}
