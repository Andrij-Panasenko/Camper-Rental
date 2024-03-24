import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    font-family: "Inter", sans-serif;
    margin: 0;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ol, ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;
