import React from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Display from './Display';
import Controls from './Controls';
import Header from './Header';
import Alert from './Alert';

const App = () => {
  const [state, setState] = React.useState({
    width: 200,
    height: 200,
    topLeft: 40,
    topRight: 40,
    bottomLeft: 40,
    bottomRight: 40,
  });

  const { width, height, topLeft, topRight, bottomLeft, bottomRight } = state;

  const updateWidth = (e) => {
    setState((prevState) => ({
      ...prevState,
      width: e.target.value,
    }));
  };

  const updateHeight = (e) => {
    setState((prevState) => ({
      ...prevState,
      height: e.target.value,
    }));
  };

  const updateTopLeft = (e) => {
    setState((prevState) => ({
      ...prevState,
      topLeft: e.target.value,
    }));
  };

  const updateTopRight = (e) => {
    setState((prevState) => ({
      ...prevState,
      topRight: e.target.value,
    }));
  };

  const updateBottomLeft = (e) => {
    setState((prevState) => ({
      ...prevState,
      bottomLeft: e.target.value,
    }));
  };

  const updateBottomRight = (e) => {
    setState((prevState) => ({
      ...prevState,
      bottomRight: e.target.value,
    }));
  };

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1200px',
          mx: 'auto',
          height: '100vh',
        }}
      >
        {/* <Alert /> */}
        <Header
          topLeft={topLeft}
          topRight={topRight}
          bottomLeft={bottomLeft}
          bottomRight={bottomRight}
        />
        <Sheet sx={{ display: 'flex', flex: 1 }}>
          <Controls
            width={width}
            height={height}
            topLeft={topLeft}
            topRight={topRight}
            bottomLeft={bottomLeft}
            bottomRight={bottomRight}
            updateWidth={updateWidth}
            updateHeight={updateHeight}
            updateTopLeft={updateTopLeft}
            updateTopRight={updateTopRight}
            updateBottomLeft={updateBottomLeft}
            updateBottomRight={updateBottomRight}
          />
          <Display
            width={width}
            height={height}
            topLeft={topLeft}
            topRight={topRight}
            bottomLeft={bottomLeft}
            bottomRight={bottomRight}
          />
        </Sheet>
      </Sheet>
    </CssVarsProvider>
  );
};

export default App;
