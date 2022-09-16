export type Product = {
  id: UniqueId;
  name: string;
  description: string;
  cost: number;
  price: number;
  category: Category;
};

export type ProductForm = Omit<Product, 'category'> & {
  categoryId: string;
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

export enum ProductActionTypes {
  GET_PRODUCTS_REQUEST = '@@product/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = '@@product/GET_PRODUCTS_SUCCESS',
}

export type UseProduct = {
  productState: ProductState;
  createProduct: () => void;
};
