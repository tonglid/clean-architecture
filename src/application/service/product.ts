import API from './defaultInstance';
import './mock-data/product';
export const getProductsService = () => API.get('/products').then((res) => res);
