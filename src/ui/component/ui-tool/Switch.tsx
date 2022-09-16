import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { FC } from 'react';

interface Props extends SwitchProps {
  label?: string;
}
const SwitchLabel: FC<Props> = ({ label = '', ...props }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch {...props} />} label={label} />
    </FormGroup>
  );
};

export default SwitchLabel;
