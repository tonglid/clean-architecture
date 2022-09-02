import * as React from 'react';
import { UseProduct } from '../../domain/product';
import { useProduct } from './useProduct';

const Product = () => {
  const {
    productState: { products },
  } = useProduct();
  return (
    <table>
      <thead>
        <tr>
          <th>NO.</th>
          <th>Name</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Product;
