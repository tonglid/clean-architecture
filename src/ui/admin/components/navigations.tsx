import { ReactNode } from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';

export interface Navigation {
  id: string;
  name: string;
  icon?: ReactNode;
  to?: string;
  children?: Navigation[];
}

const navigations: Array<Navigation> = [
  {
    id: 'product',
    name: 'Product',
    icon: <InventoryIcon/>,
    to: '/product',
  },
];
export default navigations;
