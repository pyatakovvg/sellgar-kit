
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { name as profileReducerName, reducer as profileReducer } from '@widget/profile';


type TModule = {
  [name: string]: any;
};


async function createStore(app: any) {
  const modules = app.getModules();
  const appModules: TModule = {};

  for (let index in modules) {
    if (modules.hasOwnProperty(index)) {
      const module = await modules[index];
      if (('name' in module) && ('reducer' in module)) {
        appModules[module['name']] = module['reducer'];
      }
    }
  }

  return configureStore({
    reducer: combineReducers({
      ...appModules,
      [profileReducerName]: profileReducer,
    }),
  });
}

export default createStore;
