import { styled } from "styled-components";
import bannerImg from "../../../assets/Banner-Images.jpg";
import { NavLink as Navigate } from "react-router-dom";


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0;
`;

export const BannerTitle = styled.h1`
color: #fff7ed;
  font-size: 55px;
  max-width: 600px;
  text-align: center;
  margin-bottom: 60px;
`;

export const NavLink = styled(Navigate)`
  font-weight: 500;
  font-size: 25px;
  line-height: 1, 5;
  letter-spacing: -0.01em;
  border-radius: 200px;
  padding: 20px 64px;
  text-decoration: none;
  color: #fff7ed;
  background-color: ${(p) => p.theme.colors.red};
  transition: background-color ${(p) => p.theme.transition};

  &:hover,
  :focus {
    background-color: ${(p) => p.theme.colors.hoverRed};
  }
`;