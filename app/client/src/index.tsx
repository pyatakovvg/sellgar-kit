
import { Application, Config, Router, Wrapper } from '@sellgar/app';
import { getProfile, events as profileEvents } from '@widget/profile';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import createStore from './store';
import publicRoutes from './configs/routes/public';
import protectedRoutes from './configs/routes/protected';

import './styles/index.scss';


(async () => {
  try {
    const config = new Config({});

    const app = new Application(config);


    app.addLoader(import('./Loader'));

    app.addRouter(new Router(publicRoutes));
    app.addRouter(new Router(protectedRoutes, { protected: true }));

    app.addWrapper('default', new Wrapper(import('@wrapper/default')));
    app.addWrapper('navigate', new Wrapper(import('@wrapper/navigate')));


    app.execCallback('check:profile', async function() {
      await app.react.dispatch(getProfile());
    });

    profileEvents.on('auth', () => {
      app.events.emit('init', true);
    });

    profileEvents.on('not-auth', () => {
      app.events.emit('init', true);
      app.react.navigate(process.env['PUBLIC_URL'] + '/sign-in');
    });

    profileEvents.on('error', (error) => {
      app.events.emit('init', true);
      app.react.navigate(process.env['PUBLIC_URL'] + '/error', { state: error });
    });

    const store = await createStore(app);
    const selector = document.querySelector('#root');

    if ( ! selector) {
      throw new Error('selector is null');
    }

    const root = ReactDOM.createRoot(selector);
    const AppView = app.createView();

    root.render(
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
  catch(error) {

    console.log(error);
  }
})();
