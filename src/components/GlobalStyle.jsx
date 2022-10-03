import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    background-color: #f3f4f8;
    text-align: center;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
`;
