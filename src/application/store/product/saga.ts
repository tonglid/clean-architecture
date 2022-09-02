import { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { Types } from '../../../domain/product';
import { getProductsService } from '../../service/product';
import { setProductsAction } from './reducer';

function* getProducts(): Generator {
  try {
    const res = (yield call(getProductsService)) as AxiosResponse;
    yield put(setProductsAction({ products: res.data.products }));
  } catch (err) {}
}
function* watchGetProducts(): Generator {
  yield takeLatest(Types.GET_PRODUCTS, getProducts);
}

export function* productSaga(): Generator {
  yield all([fork(watchGetProducts)]);
}
