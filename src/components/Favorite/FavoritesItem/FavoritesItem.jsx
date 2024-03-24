import { PiWind } from "react-icons/pi";
import {
  Button,
  CardInfo,
  Description,
  Image,
  InfoList,
  InfoListItem,
  Item,
  Location,
  LocationWrapper,
  MapPinSVG,
  Price,
  RateSvg,
  RatingWrapper,
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
  const [isCardFavorite, setIsCardFavorite] = useState(false);
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
    <Svg>
      <use xlinkHref={sprite + "#icon-adults"}></use>
    </Svg>
  );

  const kitchenSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-kitchen"}></use>
    </Svg>
  );

  const transmissionSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-trans"}></use>
    </Svg>
  );

  const petrolSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-petrol"}></use>
    </Svg>
  );

  const bedsSvgIcon = (
    <Svg>
      <use xlinkHref={sprite + "#icon-bed"}></use>
    </Svg>
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
      onClick={() => {
        dispatch(removeFromFavorite(data));
        setIsCardFavorite(!isCardFavorite);
      }}>
      <use xlinkHref={sprite + "#icon-red-heart"}></use>
    </Svg>
  );

  return (
    <>
      <Item>
        <Image src={gallery[0]} alt={name} />
        <div>
          <TitleWrapper>
            <Title>{name}</Title>
            <Price>
              €{price}.00 {redHeartSvg}
            </Price>
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
              {adults}&nbsp;adults
            </InfoListItem>
            <InfoListItem>
              {transmissionSvgIcon}
              {transmission}
            </InfoListItem>
            <InfoListItem>
              {petrolSvgIcon}
              {engine}
            </InfoListItem>
            <InfoListItem>{kitchenSvgIcon}Kitchen</InfoListItem>
            <InfoListItem>
              {bedsSvgIcon}
              {details.beds}&nbsp;beds
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
