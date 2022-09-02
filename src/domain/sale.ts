import { Product } from './product';
import { User } from './user';

export type Sale = {
  id: UniqueId;
  total: number;
  date: DateTime;
  user: User;
  SaleItems: SaleItem[];
};

export type SaleItem = {
  id: UniqueId;
  product: Product;
  quantity: number;
  cost: number;
  price: number;
};
