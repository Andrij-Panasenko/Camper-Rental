import { PiWind } from "react-icons/pi";
import {
  ContentName,
  Contetn,
  EquipButton,
  Title,
  EquipmentList,
  Filters,
  Input,
  InputWrapper,
  Label,
  LineSvg,
  MapPin,
  VehicleList,
  VehicleType,
  VehicleName,
  VehicleTypeSvg,
  SubmitBtn,
  FilterIcon,
} from "./CampersFilter.styled";

import sprite from "../../../assets/sprite.svg";

export const CampersFilter = () => {
  const mapPinSVG = (
    <MapPin>
      <use xlinkHref={sprite + "#icon-map-pin"}></use>
    </MapPin>
  );

  const tvSvgIcon = (
    <FilterIcon>
      <use xlinkHref={sprite + "#icon-TV"}></use>
    </FilterIcon>
  );

  const kitchenSvgIcon = (
    <FilterIcon>
      <use xlinkHref={sprite + "#icon-kitchen"}></use>
    </FilterIcon>
  );

  const acSvgIcon = (
    <PiWind
      style={{
        color: "#000000",
        width: "32px",
        height: "32px",
      }}
    />
  );

  const transmissionSvgIcon = (
    <FilterIcon>
      <use xlinkHref={sprite + "#icon-trans"}></use>
    </FilterIcon>
  );

  const showerSvgIcon = (
    <FilterIcon>
      <use xlinkHref={sprite + "#icon-shower"}></use>
    </FilterIcon>
  );

  const lineSVG = (
    <LineSvg>
      <use xlinkHref={sprite + "#icon-line"}></use>
    </LineSvg>
  );

  const vanSVG = (
    <VehicleTypeSvg>
      <use xlinkHref={sprite + "#icon-van"}></use>
    </VehicleTypeSvg>
  );

  const integratedSVG = (
    <VehicleTypeSvg>
      <use xlinkHref={sprite + "#icon-integrated"}></use>
    </VehicleTypeSvg>
  );

  const acloveSVG = (
    <VehicleTypeSvg>
      <use xlinkHref={sprite + "#icon-aclove"}></use>
    </VehicleTypeSvg>
  );

  return (
    <>
      <div>
        <InputWrapper>
          {mapPinSVG}
          <Label>Location</Label>
          <Input type="text" />
        </InputWrapper>

        <Filters>Filters</Filters>

        <div>
          <Title>Vehicle equipment</Title>
          {lineSVG}
          <EquipmentList>
            <EquipButton>
              <Contetn>
                {acSvgIcon}
                <ContentName>AC</ContentName>
              </Contetn>
            </EquipButton>
            <EquipButton>
              <Contetn>
                {transmissionSvgIcon}
                <ContentName>Automatic</ContentName>
              </Contetn>
            </EquipButton>
            <EquipButton>
              <Contetn>
                {kitchenSvgIcon}
                <ContentName>Kitchen</ContentName>
              </Contetn>
            </EquipButton>
            <EquipButton>
              <Contetn>
                {tvSvgIcon}
                <ContentName>TV</ContentName>
              </Contetn>
            </EquipButton>
            <EquipButton>
              <Contetn>
                {showerSvgIcon}

                <ContentName>Shower/WC</ContentName>
              </Contetn>
            </EquipButton>
          </EquipmentList>
        </div>
        <div>
          <Title>Vehicle type</Title>
          {lineSVG}
          <VehicleList>
            <VehicleType>
              {vanSVG}
              <VehicleName>Van</VehicleName>
            </VehicleType>
            <VehicleType>
              {integratedSVG}
              <VehicleName>Fully Integrated</VehicleName>
            </VehicleType>
            <VehicleType>
              {acloveSVG}
              <VehicleName>Alcove</VehicleName>
            </VehicleType>
          </VehicleList>
        </div>
        <SubmitBtn type="submit">Search</SubmitBtn>
      </div>
    </>
  );
};
