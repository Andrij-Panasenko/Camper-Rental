import { useSelector } from "react-redux";
import { selectCampers } from "../../../redux/selectors";
import { CampersItem } from "../CampersItem/CampersItem";
import { useState } from "react";
import { LoadMore } from "./CatalogList.styled";

export const CatalogList = () => {
  const campersItem = useSelector(selectCampers);

  const [visibleCampers, setVisibleCampers] = useState(4);

  const handleLoadMore = () => {
    setVisibleCampers((prevItems) => prevItems + 4);
  };

  return (
    <>
      <div>
        <ul>
          {campersItem.slice(0, visibleCampers).map((item) => (
            <CampersItem key={item._id} value={item} />
          ))}
        </ul>
        {visibleCampers < campersItem.length && (
          <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
        )}
      </div>
    </>
  );
};
