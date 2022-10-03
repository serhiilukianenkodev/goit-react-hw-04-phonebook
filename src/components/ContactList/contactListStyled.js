import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 20px auto;
  width: 480px;
  padding: 0;
  border: 1px solid lightgray;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;

  :nth-child(2n) {
    background-color: white;
  }
`;
