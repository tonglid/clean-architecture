import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const blink = keyframes`
  from { visibility: visible; }
  to { visibility: hidden; }
`;

export const ButtonBlink = styled(Button)({
  animation: `${blink} 1s steps(5, start) infinite`,
});
