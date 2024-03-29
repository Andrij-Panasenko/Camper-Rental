import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectIsLoading } from "../../../redux/selectors";
import { CampersItem } from "../CampersItem/CampersItem";
import { useState } from "react";
import { LoadMore } from "./CatalogList.styled";
import Notiflix from "notiflix";
import { getAllCampers } from "../../../redux/operations";
import { useEffect } from "react";

export const CatalogList = () => {
  const dispatch = useDispatch();
  const campersItem = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);

  const [visibleCampers, setVisibleCampers] = useState(4);

  useEffect(() => {
    dispatch(getAllCampers(visibleCampers));
  }, [dispatch, visibleCampers]);

  const handleLoadMore = () => {
    setVisibleCampers((prevItems) => prevItems + 4);
  };

  return (
    <>
      {isLoading && Notiflix.Loading.dots("Please wait")}
      {!isLoading && Notiflix.Loading.remove()}
      <div>
        <ul>
          {campersItem.map((item) => (
            <CampersItem key={item._id} value={item} />
          ))}
        </ul>

        <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
      </div>
    </>
  );
};
