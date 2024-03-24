import { useEffect } from "react";
import { getAllCampers } from "../redux/operations";
import { useDispatch } from "react-redux";
import { Catalog } from "../components/Catalog/Catalog";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <div>
      <Catalog/>
    </div>
  );
}
