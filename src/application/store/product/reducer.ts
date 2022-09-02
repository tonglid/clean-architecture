import { createAction, createReducer } from '@reduxjs/toolkit';
import { initialState, Product, Types } from '../../../domain/product';

export const getProductsAction = createAction(Types.GET_PRODUCTS);
export const setProductsAction = createAction<
  { products: Product[] },
  Types.SET_PRODUCTS
>(Types.SET_PRODUCTS);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProductsAction, (state) => {
      state.isLoading = true;
    })
    .addCase(setProductsAction, (state, action) => {
      state.products = action.payload.products;
    });
});
export default reducer;
