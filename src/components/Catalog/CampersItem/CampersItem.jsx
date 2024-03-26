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
  Svg,
  RateSvg,
  CardInfo,
  RatingWrapper,
  LocationWrapper,
  MapPinSVG,
  HeartWrapper,
} from "./CampersItem.styled";
import sprite from "../../../assets/sprite.svg";

import { useState } from "react";
import { ModalShowMore } from "../../ModalShowMore.jsx/ModalShowMore";
import { useDispatch } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../../redux/catalogSlice";
import { PiWind } from "react-icons/pi";

export const CampersItem = ({ value }) => {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCardFavorite, setIsCardFavorite] = useState(false);

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

  const heartSvgIcon = (
    <svg
      width="24"
      height="24"
      onClick={() => {
        dispatch(addToFavorite(value));
        setIsCardFavorite(!isCardFavorite);
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
        setIsCardFavorite(!isCardFavorite);
      }}>
      <use xlinkHref={sprite + "#icon-red-heart"}></use>
    </svg>
  );

  return (
    <>
      <Item>
        <Image src={gallery[0]} alt={name} />
        <div>
          <TitleWrapper>
            <Title>{name}</Title>
            <Price>
              €{price}.00{" "}
              <HeartWrapper>
                {isCardFavorite ? redHeartSvg : heartSvgIcon}
              </HeartWrapper>
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
              <div>{adultsSvgIcon}</div>
              <p>{adults}&nbsp;adults</p>
            </InfoListItem>
            <InfoListItem>
              <div>{transmissionSvgIcon}</div>

              <p>{transmission}</p>
            </InfoListItem>
            <InfoListItem>
              <div>{petrolSvgIcon}</div>
              <p>{engine}</p>
            </InfoListItem>

            <InfoListItem>
              <div>{kitchenSvgIcon}</div>
              <p>Kitchen</p>
            </InfoListItem>
            <InfoListItem>
              <div>{bedsSvgIcon}</div>
              <p>{details.beds}&nbsp;beds</p>
            </InfoListItem>
            <InfoListItem>
              <div>{acSvgIcon}</div>
              <p>AC</p>
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
