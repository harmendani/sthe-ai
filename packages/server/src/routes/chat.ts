const chatRoute = {
  method: 'GET',
  url: '/chat'
}

export const chatRoutes = (controllers: any) => (
  [{
    ...chatRoute,
    handler: controllers.sendMessage
  }])


