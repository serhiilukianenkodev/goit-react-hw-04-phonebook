import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px;
  border-radius: 4px;

  transition: scale 250ms;
  :hover,
  :focus {
    scale: 1.05;
  }
`;
