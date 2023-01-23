import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-size: 62.5%;
}
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_800} ;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 1.6rem;

  -webkit-font-smoothing: antialiased
}

h1, a, input, table, label, textarea, strong{
  font-family: 'Roboto', sans-serif;
}
button, h2, p, span{
  font-family: 'Poppins', sans-serif;
}

ul{
  list-style: none;
}
a{
  list-style: none;
  text-decoration: none;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
}
button:hover, a:hover{
  cursor: pointer;
  filter: brightness( 0.9);
}
`;
