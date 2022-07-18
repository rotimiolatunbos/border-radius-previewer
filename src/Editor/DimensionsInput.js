import React from 'react';

import { Row } from './styled';
import ValueInput from './ValueInput';

const DimensionsInput = ({ boxHeight, boxWidth, handleChange }) => (
  <Row>
    <ValueInput
      onChange={handleChange}
      label="width"
      name="width"
      value={boxWidth}
    />
    <ValueInput
      onChange={handleChange}
      label="height"
      name="height"
      value={boxHeight}
    />
  </Row>
);

export default DimensionsInput;
