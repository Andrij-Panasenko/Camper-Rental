import { PiWind } from "react-icons/pi";
import {
  Button,
  CardInfo,
  Description,
  Image,
  InfoList,
  InfoListItem,
  InfoListText,
  Item,
  Location,
  LocationWrapper,
  MapPinSVG,
  Price,
  PriceWrapp,
  RateSvg,
  RatingWrapper,
  RedHeartWrapp,
  Reviews,
  Svg,
  Title,
  TitleWrapper,
} from "./FavoritesItem.styled";
import { useState } from "react";
import { ModalShowMore } from "../../ModalShowMore.jsx/ModalShowMore";
import sprite from "../../../assets/sprite.svg";
import { useDispatch } from "react-redux";
import { removeFromFavorite } from "../../../redux/catalogSlice";

export const FavoritesItem = ({ data }) => {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  
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
  } = data;

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

  const redHeartSvg = (
    <Svg
      width="24"
      height="24"
      onClick={() => {
        dispatch(removeFromFavorite(data));
      }}>
      <use xlinkHref={sprite + "#icon-red-heart"}></use>
    </Svg>
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
              <Price>€{priceValue}</Price>
              <RedHeartWrapp>{redHeartSvg}</RedHeartWrapp>
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
            <InfoListItem>{kitchenSvgIcon}Kitchen</InfoListItem>
            <InfoListItem>
              {bedsSvgIcon}
              <InfoListText>{details.beds}&nbsp;beds</InfoListText>
            </InfoListItem>
            <InfoListItem>{acSvgIcon}AC</InfoListItem>
          </InfoList>
          <Button
            type="button"
            onClick={() => {
              setIsOpenModal(true);
            }}>
            Show more
          </Button>
        </div>
      </Item>

      <ModalShowMore
        isModalOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        data={data}
      />
    </>
  );
};
