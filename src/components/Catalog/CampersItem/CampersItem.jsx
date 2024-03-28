import {
  Item,
  Image,
  Description,
  Button,
  Title,
  Price,
  Reviews,
  Location,
  TitleWrapper,
  InfoList,
  InfoListItem,
  RateSvg,
  CardInfo,
  RatingWrapper,
  LocationWrapper,
  MapPinSVG,
  HeartWrapper,
  InfoListText,
  PriceWrapp,
} from "./CampersItem.styled";
import sprite from "../../../assets/sprite.svg";

import { useMemo, useState } from "react";
import { ModalShowMore } from "../../ModalShowMore/ModalShowMore";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../../redux/catalogSlice";
import { PiWind } from "react-icons/pi";
import { selectFavoriteCampers } from "../../../redux/selectors";

export const CampersItem = ({ value }) => {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const favorites = useSelector(selectFavoriteCampers);

  const isCardFavorite = useMemo(
    () => favorites.find((favorite) => favorite._id === value._id),
    [favorites, value._id]
  );

  const handleModalOpen = () => {
    setIsOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const {
    adults,
    description,
    engine,
    location,
    name,
    price,
    rating,
    transmission,
    details,
    gallery,
    reviews,
  } = value;

  const ratingSVG = (
    <RateSvg>
      <use xlinkHref={sprite + "#icon-Rating"}></use>
    </RateSvg>
  );

  const mapPinSVG = (
    <MapPinSVG>
      <use xlinkHref={sprite + "#icon-map-pin"}></use>
    </MapPinSVG>
  );

  const adultsSvgIcon = (
    <svg width="20" height="20">
      <use xlinkHref={sprite + "#icon-adults"}></use>
    </svg>
  );

  const kitchenSvgIcon = (
    <svg width="20" height="20">
      <use xlinkHref={sprite + "#icon-kitchen"}></use>
    </svg>
  );

  const transmissionSvgIcon = (
    <svg width="20" height="20">
      <use xlinkHref={sprite + "#icon-trans"}></use>
    </svg>
  );

  const petrolSvgIcon = (
    <svg width="20" height="20">
      <use xlinkHref={sprite + "#icon-petrol"}></use>
    </svg>
  );

  const bedsSvgIcon = (
    <svg width="20" height="20">
      <use xlinkHref={sprite + "#icon-bed"}></use>
    </svg>
  );

  const acSvgIcon = (
    <PiWind
      style={{
        color: "#000000",
        width: "20px",
        height: "20px",
      }}
    />
  );

  const heartSvgIcon = (
    <svg
      width="24"
      height="24"
      onClick={() => {
        dispatch(addToFavorite(value));
      }}>
      <use xlinkHref={sprite + "#icon-heart"}></use>
    </svg>
  );

  const redHeartSvg = (
    <svg
      width="24"
      height="24"
      onClick={() => {
        dispatch(removeFromFavorite(value));
      }}>
      <use xlinkHref={sprite + "#icon-red-heart"}></use>
    </svg>
  );

  const priceValue = price.toFixed(2).replace(".", ",");

  return (
    <>
      <Item>
        <Image src={gallery[0]} alt={name} />
        <div>
          <TitleWrapper>
            <Title>{name}</Title>
            <PriceWrapp>
              <Price>€{priceValue} </Price>
              <HeartWrapper>
                {isCardFavorite ? redHeartSvg : heartSvgIcon}
              </HeartWrapper>
            </PriceWrapp>
          </TitleWrapper>
          <CardInfo>
            <RatingWrapper>
              {ratingSVG}
              <Reviews>
                {rating} ({reviews.length} Rewiews)
              </Reviews>
            </RatingWrapper>
            <LocationWrapper>
              {mapPinSVG}
              <Location>{location}</Location>
            </LocationWrapper>
          </CardInfo>

          <Description>{description}</Description>
          <InfoList>
            <InfoListItem>
              {adultsSvgIcon}
              <InfoListText>{adults}&nbsp;adults</InfoListText>
            </InfoListItem>
            <InfoListItem>
              {transmissionSvgIcon}

              <InfoListText>{transmission}</InfoListText>
            </InfoListItem>
            <InfoListItem>
              {petrolSvgIcon}
              <InfoListText>{engine}</InfoListText>
            </InfoListItem>

            <InfoListItem>
              {kitchenSvgIcon}
              <InfoListText>Kitchen</InfoListText>
            </InfoListItem>
            <InfoListItem>
              {bedsSvgIcon}
              <InfoListText>{details.beds}&nbsp;beds</InfoListText>
            </InfoListItem>
            <InfoListItem>
              {acSvgIcon}
              <InfoListText>AC</InfoListText>
            </InfoListItem>
          </InfoList>
          <Button type="button" onClick={handleModalOpen}>
            Show more
          </Button>
        </div>
      </Item>

      <ModalShowMore
        isModalOpen={isOpenModal}
        setModalClose={handleModalClose}
        data={value}
      />
    </>
  );
};
