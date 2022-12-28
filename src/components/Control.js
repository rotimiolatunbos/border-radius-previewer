import React from 'react';

import Slider from '@mui/joy/Slider';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

const Control = ({ label, maxValue, minValue, value, onChange }) => {
  return (
    <Sheet>
      <Typography>{label}</Typography>
      <Sheet sx={{ display: 'flex', alignItems: 'center' }}>
        <Slider
          defaultValue={value}
          min={minValue}
          max={maxValue}
          onChange={onChange}
        />
        <Typography component="span">{value}</Typography>
      </Sheet>
    </Sheet>
  );
};

export default Control;
