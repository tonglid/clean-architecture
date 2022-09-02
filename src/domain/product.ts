export type Product = {
  id: UniqueId;
  name: string;
  description: string;
  cost: number;
  price: number;
  category: Category[];
};

export interface ProductState {
  readonly products: Product[];
  readonly product?: Product;
  readonly isLoading: boolean;
  readonly isError: boolean;
}
export const initialState: ProductState = {
  products: [],
  product: undefined,
  isLoading: false,
  isError: false,
};

export type Category = {
  id: UniqueId;
  name: string;
};

export enum Types {
  GET_PRODUCTS = 'GET/PRODUCTS',
  SET_PRODUCTS = 'SET/PRODUCTS',
}

export type UseProduct = {
  productState: ProductState;
};
