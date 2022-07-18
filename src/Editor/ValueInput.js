import React from 'react';

import { StyledInput, StyledLabel } from './styled';

const ValueInput = (props) => {
  return (
    <StyledLabel>
      {props.label}
      <br />
      <StyledInput
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </StyledLabel>
  );
};

export default ValueInput;
