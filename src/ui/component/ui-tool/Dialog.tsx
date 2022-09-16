import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Divider,
  IconButton,
} from '@mui/material';
import { FC, ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
interface Props {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  actions?: ReactNode;
  actionLoading?: boolean;
  isFooter?: boolean;
}
const Dialog: FC<Props> = ({
  open,
  title,
  onClose,
  actions,
  children,
  actionLoading,
  isFooter = false,
}) => {
  return (
    <MuiDialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
      </DialogTitle>
      <DialogContent
        sx={{
          minWidth: {
            xs: '100%',
            sm: '100%',
            md: '400px',
          },
        }}
      >
        {children}
      </DialogContent>
      {isFooter && (
        <DialogActions>
          <Button
            onClick={onClose}
            color="primary"
            variant="outlined"
            disabled={actionLoading}
          >
            ປິດ
          </Button>
          {actions}
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;
