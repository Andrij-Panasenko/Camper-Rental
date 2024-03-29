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

  const [visibleCampres, setVisibleCampres] = useState(4);

  const totalCampersItem = 13;

  useEffect(() => {
    dispatch(getAllCampers(visibleCampres));
  }, [dispatch, visibleCampres]);

  const handleLoadMore = () => {
    setVisibleCampres(prevItems => prevItems + 4);
  };


  const isTotalCampers = campersItem.length >= totalCampersItem;


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
        {!isTotalCampers && (
          <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
        )}
      </div>
    </>
  );
};
