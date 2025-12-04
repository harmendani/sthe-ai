import Fastify from 'fastify'
import config from './env.js'
import routes from './routes/routes.js'

const fastify = Fastify({
  logger: true,
  bodyLimit: 1048576
})

fastify.register(routes)

try {
  fastify.listen({ port: config.PORT, host: '::' })
}
catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

const gracefulShutdown = async () => {
  await fastify.close()
  fastify.log.info('Server closed gracefully!')
  process.exit(0)
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
