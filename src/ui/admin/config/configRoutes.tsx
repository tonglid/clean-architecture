import Product from "../container/product/Product";

export type LayoutKey = 'ADMIN' | 'AUTH';export interface Router {
  component: JSX.Element;
  name: string;
  id: string;
  children?: Router[];
  path: string;
  index?: boolean;
}
export type Routes = {
  [key in LayoutKey]: Array<Router>;
};

const routes: Routes = {
  AUTH: [
    {
      component: <></>,
      name: 'login',
      id: 'login',
      path: '/login',
    },
    {
      component: <></>,
      name: 'reset password',
      id: 'reset-password',
      path: '/reset-password',
    },
  ],
  ADMIN: [
    {
      component: <Product/>,
      name: 'product',
      id: 'product',
      path: '/product',
    }
  ]
};
export default routes;
