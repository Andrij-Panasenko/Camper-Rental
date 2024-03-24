import styled from "styled-components";

export const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 430px;
  row-gap: 8px;
  column-gap: 8px;
  margin-bottom: 44px;
`;

export const FeaturesItem = styled.li`
  display: flex;
  border-radius: 100px;
  padding: 12px 18px;
  background-color: ${(p) => p.theme.colors.blockFeatures};
`;

export const VehicleDetailsTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  color: ${(p) => p.theme.colors.black};
`;

export const SvgLine = styled.svg`
  width: 430px;
  height: 2px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const VehicleDetailsList = styled.ul`
  display: block;
  width: 430px;
`;

export const VehicleDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const VehicleDetailsContent = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  text-transform: capitalize;
  color: ${(p) => p.theme.colors.black};
`;
