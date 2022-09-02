import { all, fork } from 'redux-saga/effects';
import { productSaga } from './product/saga';

export default function* sagas() {
  yield all([fork(productSaga)]);
}
