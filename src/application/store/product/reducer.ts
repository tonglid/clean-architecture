import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  initialState,
  Product,
  ProductActionTypes,
} from '../../../domain/product';

const getProductsAction = createAction(ProductActionTypes.GET_PRODUCTS_REQUEST);
const getProductsSuccessAction = createAction<
  { products: Product[] },
  ProductActionTypes.GET_PRODUCTS_SUCCESS
>(ProductActionTypes.GET_PRODUCTS_SUCCESS);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProductsAction, (state) => {
      state.isLoading = true;
    })
    .addCase(getProductsSuccessAction, (state, action) => {
      state.products = action.payload.products;
    });
});
export default reducer;
export { getProductsAction, getProductsSuccessAction };
