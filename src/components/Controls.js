import React from 'react';

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Control from './Control';

const Controls = ({
  width,
  height,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  updateWidth,
  updateHeight,
  updateTopLeft,
  updateTopRight,
  updateBottomLeft,
  updateBottomRight,
}) => {
  return (
    <Sheet
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '250px',
      }}
    >
      <Typography>Dimensions</Typography>
      <Control
        label="Width"
        value={width}
        minValue={50}
        maxValue={400}
        onChange={updateWidth}
      />
      <Control
        label="Height"
        value={height}
        minValue={50}
        maxValue={400}
        onChange={updateHeight}
      />
      <Typography>Border</Typography>
      <Control
        label="Top Left"
        value={topLeft}
        minValue={0}
        maxValue={width > height ? width : height}
        onChange={updateTopLeft}
      />
      <Control
        label="Top Right"
        value={topRight}
        minValue={0}
        maxValue={width > height ? width : height}
        onChange={updateTopRight}
      />
      <Control
        label="Bottom Left"
        value={bottomLeft}
        minValue={0}
        maxValue={width > height ? width : height}
        onChange={updateBottomLeft}
      />
      <Control
        label="Bottom Right"
        value={bottomRight}
        minValue={0}
        maxValue={width > height ? width : height}
        onChange={updateBottomRight}
      />
    </Sheet>
  );
};

export default Controls;
