import { useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../../redux/selectors";
import { FavoritesItem } from "../FavoritesItem/FavoritesItem";
import { EmtyListMsg } from "./FavoriteList.styled";

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
            <FavoritesItem key={item._id} data={item} />
          ))}
        </ul>
      )}
    </>
  );
};
