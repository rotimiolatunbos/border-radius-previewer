import React from 'react';

import Sheet from '@mui/joy/Sheet';

const Display = ({
  width,
  height,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) => {
  return (
    <Sheet
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Sheet
        sx={{
          border: '3px solid black',
          width,
          height,
          borderTopLeftRadius: topLeft,
          borderTopRightRadius: topRight,
          borderBottomLeftRadius: bottomLeft,
          borderBottomRightRadius: bottomRight,
        }}
      ></Sheet>
    </Sheet>
  );
};

export default Display;
