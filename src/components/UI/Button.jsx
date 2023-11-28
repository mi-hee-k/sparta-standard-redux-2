import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-weight: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    filter: brightness(1.2);
  }
`;

export default Button;
