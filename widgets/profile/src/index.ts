
import { Events } from '@helper/utils';


export const events = new Events();

export {
  getProfile,
  signIn,
  signOut,
} from './ducks/commands';

export {
  selectInProcess,
  getProfileRequestSuccessAction
} from './ducks/slice';

export {
  resetStateAction,
} from './ducks/slice';

export { name, reducer } from './ducks/slice';
