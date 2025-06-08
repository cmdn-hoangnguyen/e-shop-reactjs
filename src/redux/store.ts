// store/index.ts
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { cartReducer } from './reducers/cartReducer';
import { thunk } from 'redux-thunk';
import { localStorageMiddleWare } from './middleware';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk, localStorageMiddleWare)
);
