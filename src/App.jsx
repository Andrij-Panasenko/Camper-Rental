import { Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";
import WelcomePage from "./pages/WelcomePage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </>
  );
}

export default App;
