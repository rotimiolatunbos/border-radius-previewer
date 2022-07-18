import React from 'react';
import { CopyBlock, CodeBlock, dracula, googlecode, obsidian } from 'react-code-blocks';

import styled from 'styled-components';

const code = `
  border: 1px solid black;
`;

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

const CSSContainer = styled.div`
  margin: 15px 0;
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

const DimensionsInput = ({ boxHeight, boxWidth, handleChange }) => (
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
);

const BorderRadiusInput = ({
  handleChange,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) => (
  <>
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
  </>
);

const CSSDisplay = () => (
  <CSSContainer>
    <CopyBlock
      text={code}
      language={'css'}
      showLineNumbers={false}
      startingLineNumber={1}
      theme={obsidian}
      codeBlock={true}
    />
  </CSSContainer>
);

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
      <DimensionsInput
        boxHeight={boxHeight}
        boxWidth={boxWidth}
        handleChange={handleChange}
      />
      <h3>Border</h3>
      <BorderRadiusInput
        handleChange={handleChange}
        topLeft={topLeft}
        topRight={topRight}
        bottomLeft={bottomLeft}
        bottomRight={bottomRight}
      />
      <h3>CSS</h3>
      <CSSDisplay />
    </StyledDiv>
  );
};

export default Editor;
