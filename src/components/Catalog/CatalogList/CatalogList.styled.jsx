import styled from "styled-components";


export const LoadMore = styled.button`
  display: block;
  padding: 16px 40px;
  background-color: ${(p) => p.theme.colors.red};
  color: #ffffff;
  border: none;
  border-radius: 200px;
  margin: 0 auto;
  margin-top: 40px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: background-color ${(p) => p.theme.transition};

  &:hover,
  :focus {
    background-color: #d84343;
  }
`;