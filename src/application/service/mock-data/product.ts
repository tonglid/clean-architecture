import { axiosMockAdapterInstance } from './../defaultInstance';

axiosMockAdapterInstance.onGet('/products').reply(200, {
  products: [
    {
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      cost: 100,
      price: 200,
      category: [{ id: '1', name: 'Category 1' }],
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Product 2 description',
      cost: 200,
      price: 300,
      category: [{ id: '2', name: 'Category 2' }],
    },
  ],
});
