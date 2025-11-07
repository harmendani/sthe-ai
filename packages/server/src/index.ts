import Fastify from 'fastify'
import config from './env'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async function handler(request, reply) {
  return { hello: 'world' }
})


try {
  fastify.listen({ port: config.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
