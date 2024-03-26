import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../../redux/selectors";
import { EmtyListMsg } from "./FavoriteList.styled";
import { CampersItem } from "../../Catalog/CampersItem/CampersItem";

export const FavoriteList = () => {
  const favorites = useSelector(selectFavoriteCampers);
  return (
    <>
      {favorites.length === 0 ? (
        <EmtyListMsg>
          Hi there! It seems like the list for chosen campers is empty. Could
          you please add them first? Thank you!
        </EmtyListMsg>
      ) : (
        <ul>
            {favorites.map((item) => (
            <CampersItem key={item._id} value={item} />
          ))}
        </ul>
      )}
    </>
  );
};
