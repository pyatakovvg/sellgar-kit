
import { Events } from '@helper/utils';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRoute from "./Route";
import Config from './Config';
import Router from './Router';
import Wrapper from './Wrapper';
import Loader from './Loader';
import Callback from './Callback';
import IRoute from './Route';
import AppReact from './React';


type TWrapper = {
  [name: string]: Wrapper;
}


class Application {
  isInit: boolean = false;
  loader: Loader | null;
  readonly routers: Array<Router>;
  readonly wrappers: TWrapper;
  readonly config: Config;
  readonly events: Events;
  readonly callbacks: Callback;
  readonly react: AppReact;

  constructor(config: Config) {

    this.routers = [];
    this.wrappers = {};
    this.loader = null;
    this.config = config;
    this.react = new AppReact();
    this.events = new Events();
    this.callbacks = new Callback(this);
  }

  addRouter(router: Router) {
    this.routers.push(router);
  }

  addWrapper(name: string, component: Wrapper) {
    this.wrappers[name] = component;
  }

  addLoader(component: Promise<any>) {
    this.loader = new Loader(component);
  }

  execCallback<N extends string, C>(name: N, cb: C) {
    this.callbacks.set(name, cb);
  }

  private assignRoutes(routers: Array<Router>) {
    return routers.reduce((routes: Array<AppRoute>, router): Array<AppRoute> => {
      return [
        ...routes,
        ...router['routes'].map((route) => new AppRoute(route, router['options'])),
      ];
    }, []);
  }

  getModules() {
    return this.routers.reduce((routes: Array<IRoute>, router: Router): Array<IRoute> => {
      return [
        ...routes,
        ...router['routes'].map((route: any) => route['module']),
      ];
    }, []);
  }

  private reactGet() {
    const self = this;

    return function() {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
        self.react.dispatch = dispatch;
        self.react.navigate = navigate;
      }, []);
      return null;
    }
  }

  createView() {
    const self = this;
    const ReactGet = this.reactGet();
    const routes = this.assignRoutes(this.routers);

    return function() {
      return (
        <BrowserRouter>
          <ReactGet />
          <Routes>
            {routes.map((route, index) => {
              const RouteView = route.createView(self);

              return (
                <Route
                  key={route['path'] + '_' + index}
                  path={route['path']}
                  element={(
                    <RouteView />
                  )}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      );
    }
  }
}

export default Application;
