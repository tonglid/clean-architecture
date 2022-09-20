import Button, { ButtonProps } from '@mui/material/Button';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props extends ButtonProps {
  to: string;
  
}
const ButtonLink: FC<Props> = ({ to, children, ...props }) => {
  return (
    <Link to={to}>
      <Button  {...props}>{children}</Button>
    </Link>
  );
};

export default ButtonLink;
