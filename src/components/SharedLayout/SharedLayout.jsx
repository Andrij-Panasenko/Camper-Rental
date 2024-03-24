import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { AppLayout, Header, HeaderContainer } from "./SharedLayout.styled";
import { Navigation } from "../../Navigation/Navigation";

export const SharedLayout = () => {
  return (
    <>
      <AppLayout>
        <Header>
          <HeaderContainer>
            <Navigation />
          </HeaderContainer>
        </Header>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </AppLayout>

      <GlobalStyles />
    </>
  );
};
