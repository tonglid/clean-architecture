import * as React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../application/store/hook';
import { getProductsAction } from '../../../../application/store/product/reducer';
import { UseProduct } from '../../../../domain/product';

export const useProduct = (): UseProduct => {
  const [cleanUp, setCleanUp] = React.useState(false);
  const { product } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setCleanUp(true);
    if (cleanUp) {
      dispatch(getProductsAction());
    }
    return () => {
      setCleanUp(false);
    };
  }, [dispatch, cleanUp]);
  return {
    productState: product,
    createProduct: () => {}
  };
};
