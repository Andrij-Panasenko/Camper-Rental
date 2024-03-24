import Modal from "react-modal";
import sprite from "../../assets/sprite.svg";
import "./ModalShowMore.css";
import {
  BtnWrapper,
  CardInfo,
  CloseModal,
  CrossIcon,
  Description,
  ExpandedContetnWrapp,
  FeaturesBtn,
  GalleryImg,
  GalleryItem,
  GalleryList,
  IconLine,
  Location,
  Price,
  Radio,
  RadioWrapper,
  Reviews,
  ReviewsBtn,
  Title,
} from "./ModalShowMore.styled";
import { BookingCamperForm } from "../BookingCamperForm/BookingCamperForm";
import { Features } from "../Features/Features";
import { Reviews as ReviewsBlock } from "../Reviews/Reviews";
import { useState } from "react";

Modal.setAppElement("#modal");

export const ModalShowMore = ({ isModalOpen, setIsOpen, data }) => {
  const [openFeature, setOpenFeature] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);

  const openFeaturesMenu = () => {
    setOpenFeature(true);
    setOpenReviews(false);
  };

  const openReviewsMenu = () => {
    setOpenReviews(true);
    setOpenFeature(false);
  };

  const { name, price, rating, reviews, description, gallery, location } = data;

  return (
    <>
      <Modal
        overlayClassName="Modal-overlay"
        className="Modal-content"
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsOpen(false);
          setOpenFeature(false);
          setOpenReviews(false);
        }}
        contentLabel="More info modal">
        <CloseModal
          onClick={() => {
            setIsOpen(false);
          }}>
          <CrossIcon>
            <use xlinkHref={sprite + "#icon-cross"}></use>
          </CrossIcon>
        </CloseModal>
        <div>
          <Title>{name}</Title>
          <CardInfo>
            <Reviews>
              {rating} ({reviews.length} Rewiews)
            </Reviews>
            <Location>{location}</Location>
          </CardInfo>
          <Price>€{price}.00</Price>
          <GalleryList>
            {gallery.map((item) => (
              <GalleryItem key={item}>
                <GalleryImg src={item} alt={name} />
              </GalleryItem>
            ))}
          </GalleryList>
          <Description>{description}</Description>
        </div>

        <BtnWrapper>
          <RadioWrapper>
            <Radio id="features" name="expand" type="radio" />
            <label htmlFor="features">
              <FeaturesBtn onClick={openFeaturesMenu}>Features</FeaturesBtn>
            </label>
          </RadioWrapper>

          <RadioWrapper>
            <Radio id="reviews" name="expand" type="radio" />
            <label htmlFor="reviews">
              <ReviewsBtn onClick={openReviewsMenu}>Reviews</ReviewsBtn>
            </label>
          </RadioWrapper>
        </BtnWrapper>
        <IconLine></IconLine>

        <ExpandedContetnWrapp>
          {openFeature && (
            <>
              <Features data={data} />
              <BookingCamperForm />
            </>
          )}
          {openReviews && (
            <>
              <ReviewsBlock data={data} />
              <BookingCamperForm />
            </>
          )}
        </ExpandedContetnWrapp>
      </Modal>
    </>
  );
};
