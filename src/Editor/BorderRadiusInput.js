import React from 'react';

import { Row } from './styled';
import ValueInput from './ValueInput';

const BorderRadiusInput = ({
  handleChange,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) => (
  <>
    <Row>
      <ValueInput
        onChange={handleChange}
        label="top left"
        name="topLeft"
        value={topLeft}
      />
      <ValueInput
        onChange={handleChange}
        label="top right"
        name="topRight"
        value={topRight}
      />
    </Row>
    <Row>
      <ValueInput
        onChange={handleChange}
        label="bottom left"
        name="bottomLeft"
        value={bottomLeft}
      />
      <ValueInput
        onChange={handleChange}
        label="bottom right"
        name="bottomRight"
        value={bottomRight}
      />
    </Row>
  </>
);

export default BorderRadiusInput;
