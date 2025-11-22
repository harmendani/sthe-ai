const chatRoute = {
  method: 'GET',
  url: '/chat',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          chat: { type: 'string' }
        }
      }
    }
  }
}

export const chatRoutes = (controllers: any) => (
  [{
    ...chatRoute,
    handler: controllers.sendMessage
  }])


