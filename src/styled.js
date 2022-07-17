import styled from 'styled-components';

export const Box = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-top-left-radius: ${(props) => props.topLeft}px;
  border-top-right-radius: ${(props) => props.topRight}px;
  border-bottom-left-radius: ${(props) => props.bottomLeft}px;
  border-bottom-right-radius: ${(props) => props.bottomRight}px;
  border: 1px solid black;
`;

export const BoxContainer = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #F7F7F7;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const EditorContainer = styled.div`
  flex-basis: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // display: grid;
`;
