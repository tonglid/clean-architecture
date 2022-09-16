import styled from '@emotion/styled';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

const TooltipDetail = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    disableFocusListener
    disableHoverListener
    disableTouchListener
    placement="right"
    PopperProps={{ disablePortal: true }}
    classes={{ popper: className }}
    arrow
  />
))`
  & .MuiTooltip-tooltip {
    background: #fff;
    min-width: 350px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding-bottom: 10px;
  }
  & .MuiTooltip-arrow {
    color: #fff;
  }
  & .MuiListItem-root {
    padding-top: 0;
    padding-bottom: 0;
  }
  & .MuiListItemSecondaryAction-root {
    font-size: 16;
  }
`;

export default TooltipDetail;
