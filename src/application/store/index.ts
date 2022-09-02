import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { createReduxHistoryContext } from 'redux-first-history';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    //other options if needed
  });
const sagaMiddleware = createSagaMiddleware();

const myReducer = combineReducers({ ...rootReducer, router: routerReducer });
const store = configureStore({
  reducer: myReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddleware({ thunk: false })
        .prepend(sagaMiddleware)
        .concat(logger);
    }
    return getDefaultMiddleware({ thunk: false })
      .prepend(sagaMiddleware)
      .prepend(routerMiddleware);
  },
  devTools: false,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const history = createReduxHistory(store);
export default store;
