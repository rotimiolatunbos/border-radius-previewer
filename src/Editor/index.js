import React from 'react';
import {
  CopyBlock,
  CodeBlock,
  dracula,
  googlecode,
  obsidian,
} from 'react-code-blocks';

import BorderRadiusInput from './BorderRadiusInput';
import DimensionsInput from './DimensionsInput';
import { StyledDiv } from './styled';

const code = `
  border: 1px solid black;
`;

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

export default () => <p>Editor</p>;
