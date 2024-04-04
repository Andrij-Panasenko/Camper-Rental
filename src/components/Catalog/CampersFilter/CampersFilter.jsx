import { PiWind } from "react-icons/pi";
import {
  ContentName,
  Contetn,
  EquipOption,
  Title,
  HiddenInput,
  EquipmentBoxOption,
  Filters,
  Input,
  InputWrapper,
  Label,
  LineSvg,
  MapPin,
  VehicleList,
  VehicleType,
  VehicleName,
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
    <svg width="40" height="28">
      <use xlinkHref={sprite + "#icon-van"}></use>
    </svg>
  );

  const integratedSVG = (
    <svg width="40" height="28">
      <use xlinkHref={sprite + "#icon-integrated"}></use>
    </svg>
  );

  const acloveSVG = (
    <svg width="40" height="28">
      <use xlinkHref={sprite + "#icon-aclove"}></use>
    </svg>
  );

  const handleChecked = (evt) => {
    console.dir(evt.target.name);
    const { name, checked } = evt.target;
    console.log("🚀 ~ handleChecked ~ checked:", checked)
    console.log("🚀 ~ handleChecked ~ name:", name)
    
  };

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
          <EquipmentBoxOption>
            <EquipOption>
              <HiddenInput id="AC" type="checkbox" name="AC" onChange={handleChecked} />
              <Contetn>
                {acSvgIcon}
                <ContentName>AC</ContentName>
              </Contetn>
            </EquipOption>
            <EquipOption>
              <HiddenInput
                type="checkbox"
                name="Automatic"
                onChange={handleChecked}
              />
              <Contetn>
                {transmissionSvgIcon}
                <ContentName>Automatic</ContentName>
              </Contetn>
            </EquipOption>
            <EquipOption>
              <HiddenInput type="checkbox" name="Kitchen" onChange={handleChecked} />
              <Contetn>
                {kitchenSvgIcon}
                <ContentName>Kitchen</ContentName>
              </Contetn>
            </EquipOption>
            <EquipOption>
              <HiddenInput type="checkbox" name="TV" onChange={handleChecked} />
              <Contetn>
                {tvSvgIcon}
                <ContentName>TV</ContentName>
              </Contetn>
            </EquipOption>
            <EquipOption>
              <HiddenInput
                type="checkbox"
                name="Shower/ onChange={handleChecked}WC"
              />
              <Contetn>
                {showerSvgIcon}
                <ContentName>Shower/WC</ContentName>
              </Contetn>
            </EquipOption>
          </EquipmentBoxOption>
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
