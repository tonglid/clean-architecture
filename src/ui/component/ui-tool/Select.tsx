import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import { FC } from 'react';

interface Props extends SelectProps {
  fullWidth?: boolean;
  label: string;
}
const Select: FC<Props> = ({
  fullWidth = false,
  label,
  children,
  ...props
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={'select-label' + label}>{label}</InputLabel>
      <MuiSelect label={label} {...props}>
        {children}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
