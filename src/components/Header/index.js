import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: #80DAD6;
  // z-index: 1000;
  position: absolute;
  left: 0;
  right: 0;
  color: #FFFFFF;
  padding: 10px;
`;

const Header = () => {
  return (
    <Container>
      <h2>Border Radius Previewer</h2>
    </Container>
  );
};

export default Header;
