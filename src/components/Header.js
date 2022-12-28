import React from 'react';

import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import Code from './Code';

const Header = ({ topLeft, topRight, bottomLeft, bottomRight }) => {
  return (
    <Sheet
      sx={{ display: 'flex', justifyContent: 'space-between', pt: '20px' }}
    >
      <Typography>Border Radius Previewer</Typography>
      <Code
        topLeft={topLeft}
        topRight={topRight}
        bottomLeft={bottomLeft}
        bottomRight={bottomRight}
      />
    </Sheet>
  );
};

export default Header;
