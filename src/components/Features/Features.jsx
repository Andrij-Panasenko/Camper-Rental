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
  const { details } = data;

  const filteredDetails = Object.entries(details).filter(
    ([key, value]) => value !== 0 || value !== ""
  );

  console.log(Object.entries(details))
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
          {Object.entries(details).map(
            ([key, value]) =>
              (value !== "" && (
                <VehicleDetailsItem key={key}>
                  <VehicleDetailsContent>{key}</VehicleDetailsContent>
                  <VehicleDetailsContent>{value}</VehicleDetailsContent>
                </VehicleDetailsItem>
              ))
          )}
        </VehicleDetailsList>
      </div>
    </>
  );
};
