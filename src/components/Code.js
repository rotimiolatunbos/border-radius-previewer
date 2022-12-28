import React from 'react';

import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';

const Code = ({ topLeft, topRight, bottomLeft, bottomRight }) => {
  const generateCode = () => {
    const topL = topLeft ? `${topLeft}px` : 0;
    const topR = topRight ? `${topRight}px` : 0;
    const bottomL = bottomLeft ? `${bottomLeft}px` : 0;
    const bottomR = bottomRight ? `${bottomRight}px` : 0;

    return `border-radius: ${topL} ${topR} ${bottomR} ${bottomL};`;
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
  };

  return (
    <Sheet sx={{ display: 'flex', flexDirectin: 'row', alignItems: 'center' }}>
      <Typography component="span">
        border-radius: &nbsp;
        {topLeft ? `${topLeft}px` : 0} &nbsp;
        {topRight ? `${topRight}px` : 0} &nbsp;
        {bottomRight ? `${bottomRight}px` : 0} &nbsp;
        {bottomLeft ? `${bottomLeft}px` : 0}
      </Typography>
      <Chip onClick={handleCopy}>Copy</Chip>
    </Sheet>
  );
};

export default Code;
