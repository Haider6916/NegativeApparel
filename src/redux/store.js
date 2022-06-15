/**
 * redux store
 */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
  appearanceReducer,
  userReducer,
  authReducer,
  navigationRoutesReducer,
  generalReducer,
} from './reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reducer as network } from 'react-native-offline';


const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const appearencePresistConfig = {
  key: 'appearence',

  storage: AsyncStorage,
};

/**
 * combine all reducers
 */
const rootReducer = combineReducers({
  appearance: persistReducer(
    appearencePresistConfig,
    appearanceReducer,
  ),
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  navigationRoutes: navigationRoutesReducer,
  general: generalReducer,
  network,
});

/**
 * configure and create store
 * @returns store configurations
 */
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

const store = configureStore();

export const persistor = persistStore(store);

export default store;
