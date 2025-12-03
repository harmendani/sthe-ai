const chatRoute = {
  method: 'POST',
  url: '/chat'
}

export const chatRoutes = (controllers: any) => (
  [{
    ...chatRoute,
    handler: controllers.sendMessage
  }])


