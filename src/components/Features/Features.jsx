import {
  VehicleDetailsList,
  VehicleDetailsItem,
  VehicleDetailsContent,
  VehicleDetailsTitle,
  SvgLine,
  FeaturesItem,
  FeaturesList,
} from "./Features.styled";

import sprite from "../../assets/sprite.svg";

export const Features = ({ data }) => {
  const { form, length, width, height, consumption, tank, details } = data;

  const filteredDetails = Object.entries(details).filter(
    ([key, value]) => value !== 0 || value !== ""
  );
  return (
    <>
      <div>
        <FeaturesList>
          {filteredDetails.map((item) => (
            <FeaturesItem key={item[0]}>
              <p> {item[0]} &nbsp;</p>
              <p>{item[1]}</p>
            </FeaturesItem>
          ))}
        </FeaturesList>
        <VehicleDetailsTitle>Vehicle details</VehicleDetailsTitle>
        <SvgLine>
          <use xlinkHref={sprite + "#icon-Vector"}></use>
        </SvgLine>
        <VehicleDetailsList>
          <VehicleDetailsItem>
            <VehicleDetailsContent>Form</VehicleDetailsContent>
            <VehicleDetailsContent>{form}</VehicleDetailsContent>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <VehicleDetailsContent>Length</VehicleDetailsContent>
            <VehicleDetailsContent>{length}</VehicleDetailsContent>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <VehicleDetailsContent>Width</VehicleDetailsContent>
            <VehicleDetailsContent>{width}</VehicleDetailsContent>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <VehicleDetailsContent>Height</VehicleDetailsContent>
            <VehicleDetailsContent>{height}</VehicleDetailsContent>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <VehicleDetailsContent>Tank</VehicleDetailsContent>
            <VehicleDetailsContent>{tank}</VehicleDetailsContent>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <VehicleDetailsContent>Consumption</VehicleDetailsContent>
            <VehicleDetailsContent>{consumption}</VehicleDetailsContent>
          </VehicleDetailsItem>
        </VehicleDetailsList>
      </div>
    </>
  );
};
