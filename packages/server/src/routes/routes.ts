import controllers from '../controllers/index.js';
import { chatRoutes } from './index.js';

const routes = [
  chatRoutes
];

export default function (fastify: any) {
  routes.forEach(route => {
    fastify.route(...route(controllers));
  });
}



