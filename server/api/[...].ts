import ApiController from '../controllers/login.controller';
import { controllers } from './../decorators';

export const modules = [ApiController];

const router = createRouter();
controllers.forEach(({ prefix, routes }) => {
    routes.forEach(({ path, handler, method }) => 
      router[method](`/${prefix}${path}`.replace(/\/+/g, '/'), defineEventHandler(handler)))
});

export default useBase("/api/v1", router.handler);