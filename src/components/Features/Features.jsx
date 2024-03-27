import {
  VehicleDetailsList,
  VehicleDetailsItem,
  VehicleDetailsContent,
  VehicleDetailsTitle,
  SvgLine,
  FeaturesItem,
  FeaturesList,
} from "./Features.styled";
import { PiWind } from "react-icons/pi";

import sprite from "../../assets/sprite.svg";

export const Features = ({ data }) => {
  const { details } = data;

  // const filteredDetails = Object.entries(details).filter(
  //   ([key, value]) => value !== 0 || value !== ""
  // );

  const iconSet = {
    CD: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-CD"}></use>
      </svg>
    ),
    TV: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-TV"}></use>
      </svg>
    ),
    airConditioner: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-conditioner"}></use>
      </svg>
    ),
    beds: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-beds"}></use>
      </svg>
    ),
    freezer: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-freezer"}></use>
      </svg>
    ),
    gas: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-gas"}></use>
      </svg>
    ),
    hob: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-hob"}></use>
      </svg>
    ),
    kitchen: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-kitchen"}></use>
      </svg>
    ),
    radio: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-radio"}></use>
      </svg>
    ),
    AC: (
      <PiWind
        style={{
          color: "#101828",
          width: "20px",
          height: "20px",
        }}
      />
    ),
  };

  // <FeaturesList>
  //         {filteredDetails.map((item) => (
  //           <FeaturesItem key={item[0]}>
  //             <p> {item[0]} &nbsp;</p>
  //             <p>{item[1]}</p>
  //           </FeaturesItem>
  //         ))}
  //       </FeaturesList>
  return (
    <>
      <div>
        <FeaturesList>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
          <FeaturesItem>
            <div></div>
            <p></p>
          </FeaturesItem>
        </FeaturesList>
        <VehicleDetailsTitle>Vehicle details</VehicleDetailsTitle>
        <SvgLine>
          <use xlinkHref={sprite + "#icon-Vector"}></use>
        </SvgLine>
        <VehicleDetailsList>
          {Object.entries(details).map(
            ([key, value]) =>
              value !== "" && (
                <VehicleDetailsItem key={key}>
                  <VehicleDetailsContent>{key}</VehicleDetailsContent>
                  <VehicleDetailsContent>{value}</VehicleDetailsContent>
                </VehicleDetailsItem>
              )
          )}
        </VehicleDetailsList>
      </div>
    </>
  );
};
