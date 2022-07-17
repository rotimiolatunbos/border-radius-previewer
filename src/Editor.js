import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.1);
  width: 400px;
  padding: 25px;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const StyledLabel = styled.label`
  border: 1px solid #DEDEDE;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: .7em;
`;

const StyledInput = styled.input.attrs((props) => ({
  type: 'text',
  name: props.name,
  value: props.value,
  onChange: props.onChange,
}))`
  border: none;
  outline: transparent;
`;

const StyleInput = (props) => {
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

const Editor = ({
  handleChange,
  boxWidth,
  boxHeight,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) => {
  return (
    <StyledDiv>
      <h3>Dimensions</h3>
      <Row>
        <StyleInput
          onChange={handleChange}
          label="width"
          name="width"
          value={boxWidth}
        />
        <StyleInput
          onChange={handleChange}
          label="height"
          name="height"
          value={boxHeight}
        />
      </Row>
      <h3>Border</h3>
      <Row>
        <StyleInput
          onChange={handleChange}
          label="top left"
          name="topLeft"
          value={topLeft}
        />
        <StyleInput
          onChange={handleChange}
          label="top right"
          name="topRight"
          value={topRight}
        />
      </Row>
      <Row>
        <StyleInput
          onChange={handleChange}
          label="bottom left"
          name="bottomLeft"
          value={bottomLeft}
        />
        <StyleInput
          onChange={handleChange}
          label="bottom right"
          name="bottomRight"
          value={bottomRight}
        />
      </Row>
      <h3>CSS</h3>
    </StyledDiv>
  );
};

export default Editor;
