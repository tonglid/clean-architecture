import { AxiosResponse } from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { ProductActionTypes } from '../../../domain/product';
import { getProductsService } from '../../service/product';
import { getProductsSuccessAction } from './reducer';

function* getProducts(): Generator {
  try {
    const res = (yield call(getProductsService)) as AxiosResponse;
    yield put(getProductsSuccessAction({ products: res.data.products }));
  } catch (err) {}
}
function* watchProducts(): Generator {
  yield takeLatest(ProductActionTypes.GET_PRODUCTS_REQUEST, getProducts);
}

export function* productSaga(): Generator {
  yield all([fork(watchProducts)]);
}
