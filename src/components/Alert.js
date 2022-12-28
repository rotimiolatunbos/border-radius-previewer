import React from 'react';

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

const Alert = () => {
  return (
    <Typography
      sx={{
        position: 'absolute',
        top: 60,
        left: '0',
        right: '0',
        zIndex: 19999,
      }}
      component="span"
      color="success"
    >
      copied successfully
    </Typography>
  );
};

export default Alert;
