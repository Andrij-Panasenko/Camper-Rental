import { Logo, Nav, NavLink, NavWrapp } from "./Navigation.styled"

export const Navigation = () => {
    return (
      <>
        <Nav>
          <Logo to="/">#NomadVans</Logo>
         <NavWrapp>
           <NavLink to="/catalog">Catalog</NavLink>
           <NavLink to="/favorites">Favorites</NavLink>
         </NavWrapp>
        </Nav>
      </>
    );
}
