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

const CSSContainer = styled.div`
  margin: 15px 0;
`;

export { StyledDiv, StyledInput, StyledLabel, CSSContainer, Row };
