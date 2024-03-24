import { BannerTitle, NavLink, PageWrapper } from "./Banner.styled";

export const Banner = () => {
    return (
      <PageWrapper>
            <BannerTitle>Discover Freedom on the Road: Rent Your Perfect Camper Now!</BannerTitle>
            <NavLink to="/catalog">Find your own VAN</NavLink>
      </PageWrapper>
    );
};
