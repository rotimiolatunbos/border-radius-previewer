import React from 'react';

import { Box, BoxContainer, EditorContainer, Container } from './styled';
import Editor from '../Editor';
import Header from '../Header';

import './style.css';

const App = () => {
  const [state, setState] = React.useState({
    height: 200,
    width: 300,
    topLeft: 20,
    topRight: 10,
    bottomLeft: 40,
    bottomRight: 70,
  });
  const { height, width, topLeft, topRight, bottomLeft, bottomRight } = state;

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AppBase
      handleChange={handleChange}
      height={height}
      width={width}
      topLeft={topLeft}
      topRight={topRight}
      bottomLeft={bottomLeft}
      bottomRight={bottomRight}
    />
  );
};

const AppBase = ({
  height,
  width,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  handleChange,
}) => (
  <Container>
    <Header />
    <BoxContainer>
      <Box
        height={height}
        width={width}
        topLeft={topLeft}
        topRight={topRight}
        bottomLeft={bottomLeft}
        bottomRight={bottomRight}
      />
    </BoxContainer>
    <EditorContainer>
      <Editor
        handleChange={handleChange}
        boxWidth={width}
        boxHeight={height}
        topLeft={topLeft}
        topRight={topRight}
        bottomLeft={bottomLeft}
        bottomRight={bottomRight}
      />
    </EditorContainer>
  </Container>
);

export default App;
