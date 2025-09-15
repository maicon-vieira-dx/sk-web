import type { EventHandler, RouterMethod } from "h3";
type Route = { method: RouterMethod; path: string; handler: EventHandler, name: string };
type Controller = { prefix: string; instance: object; routes: Route[] };

export const controllers = [] as Controller[];
export const Controller = (prefix = "") => (target: new () => object) => {
  controllers.push({ prefix, instance: new target(), routes: routes.map(r => (r.name = `${prefix}.${r.name}`, r)) });
  routes = [];
};

let routes = [] as Route[];
const Route = (method: RouterMethod, path = "") => (handler: EventHandler, { name }: { name: string }) => {
  routes.push({ method, path, handler, name });
};

export const Get = (path: string = '') => Route("get", path);
export const Post = (path: string = '') => Route("post", path);
export const Put = (path: string = '') => Route("put", path);
export const Delete = (path: string = '') => Route("delete", path);
export const Patch = (path: string = '') => Route("patch", path);