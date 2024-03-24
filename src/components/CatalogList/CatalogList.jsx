import { useSelector } from "react-redux";
import { selectCampers } from "../../../redux/selectors";
import { CampersItem } from "../../CampersItem/CampersItem";

export const CatalogList = () => {
  const campersItem = useSelector(selectCampers);
  return (
    <ul>
      {campersItem.map((item) => (
        <CampersItem key={item._id} value={item} />
      ))}
    </ul>
  );
};
