import {
  VehicleDetailsList,
  VehicleDetailsItem,
  VehicleDetailsContent,
  VehicleDetailsTitle,
  FeaturesItem,
  FeaturesList,
  IcoWrapp,
} from "./Features.styled";
import { PiWind } from "react-icons/pi";

import sprite from "../../assets/sprite.svg";

export const Features = ({ data }) => {
  const { details } = data;

  const filteredDetails = Object.entries(details).filter(
    ([key, value]) => value !== 0 || value !== ""
  );

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
        <use xlinkHref={sprite + "#icon-bed"}></use>
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
    toilet: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-toilet"}></use>
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
    shower: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-shower"}></use>
      </svg>
    ),
    bathroom: ((
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-shower"}></use>
      </svg>
    )),
    microwave: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-microwave"}></use>
      </svg>
    ),
    water: (
      <svg width="20" height="20">
        <use xlinkHref={sprite + "#icon-water"}></use>
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

  const vehicleDetailsKeys = [
    "form",
    "length",
    "width",
    "height",
    "consumption",
    "tank",
  ];

  return (
    <>
      <div>
        <FeaturesList>
          {filteredDetails.map(([key, value], idx) => (
            <FeaturesItem key={idx}>
              <IcoWrapp>{iconSet[key]}</IcoWrapp>
              {value > 1 && <p>{value} &nbsp; </p>}
              <p>{key}</p>
            </FeaturesItem>
          ))}
        </FeaturesList>
        <VehicleDetailsTitle>Vehicle details</VehicleDetailsTitle>
        <VehicleDetailsList>
          {Object.entries(data).map(([key, value]) =>
            vehicleDetailsKeys.includes(key) && (
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
