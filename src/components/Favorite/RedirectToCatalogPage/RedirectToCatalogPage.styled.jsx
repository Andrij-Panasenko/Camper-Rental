import styled from "styled-components";
import { NavLink as RedirectToCatalog } from "react-router-dom";

export const NavLink = styled(RedirectToCatalog)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: ${(p) => p.theme.colors.red};
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 4px;
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.red};
    transition: ${(p) => p.theme.transition};
  }

  &:hover,
  :focus {
    &::before {
      width: 100%;
      left: 0;
    }
  }
`;
