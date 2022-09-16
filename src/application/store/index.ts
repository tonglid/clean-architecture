import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger, { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import { createReduxHistoryContext } from 'redux-first-history';
import { unstable_batchedUpdates } from 'react-dom';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    batch: unstable_batchedUpdates,
  });
const sagaMiddleware = createSagaMiddleware();

const myReducer = combineReducers({ router: routerReducer, ...rootReducer });
const store = configureStore({
  reducer: myReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddleware({
        thunk: false,
      })
        .prepend(sagaMiddleware, routerMiddleware)
        .concat(
          createLogger({
            collapsed: true,
            colors: {
              action: () => '#00bcd4',
              error: () => '#ff0000',
              nextState: () => '#4caf50',
              prevState: () => '#4caf50',
              title: () => '#00bcd4',
            },
          })
        );
    }
    return getDefaultMiddleware({ thunk: false }).prepend(
      sagaMiddleware,
      routerMiddleware
    );
  },
  devTools: false,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const history = createReduxHistory(store);
export default store;
