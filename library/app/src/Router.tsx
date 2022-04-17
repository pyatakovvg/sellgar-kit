
import React from 'react';

import { IRoute } from './Route';


interface IRouteOptions {
  protected: boolean;
}

type TRouteOption = IRouteOptions | null;

interface IRouter {
  routes: Array<IRoute>;
  options: TRouteOption;
}


class Router implements IRouter {
  readonly routes: Array<IRoute>;
  readonly options: TRouteOption;

  constructor(routes: Array<IRoute>, options?: TRouteOption) {

    this.routes = routes;
    this.options = options || null;
  }
}

export default Router;
