import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';

const AlertSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {};
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      This is a success message!
    </Alert>
  </Snackbar>;
};
