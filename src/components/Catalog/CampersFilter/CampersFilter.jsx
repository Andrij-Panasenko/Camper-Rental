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
    console.log("🚀 ~ handleChecked ~ checked:", checked);
    console.log("🚀 ~ handleChecked ~ name:", name);
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
            <div>
              <HiddenInput
                id="AC"
                type="checkbox"
                name="AC"
                onChange={handleChecked}
              />
              <EquipOption htmlFor="AC">
                <Contetn>
                  {acSvgIcon}
                  <ContentName>AC</ContentName>
                </Contetn>
              </EquipOption>
            </div>
            <div>
              <HiddenInput
                id="Automatic"
                type="checkbox"
                name="Automatic"
                onChange={handleChecked}
              />
              <EquipOption htmlFor="Automatic">
                <Contetn>
                  {transmissionSvgIcon}
                  <ContentName>Automatic</ContentName>
                </Contetn>
              </EquipOption>
            </div>
            <div>
              <HiddenInput
                id="Kitchen"
                type="checkbox"
                name="Kitchen"
                onChange={handleChecked}
              />
              <EquipOption htmlFor="Kitchen">
                <Contetn>
                  {kitchenSvgIcon}
                  <ContentName>Kitchen</ContentName>
                </Contetn>
              </EquipOption>
            </div>
            <div>
              <HiddenInput id="TV" type="checkbox" name="TV" onChange={handleChecked} />
              <EquipOption htmlFor="TV">
                <Contetn>
                  {tvSvgIcon}
                  <ContentName>TV</ContentName>
                </Contetn>
              </EquipOption>
            </div>
            <div>
              <HiddenInput
                id="Shower/WC"
                type="checkbox"
                name="Shower/WC"
                onChange={handleChecked}
              />
              <EquipOption htmlFor="Shower/WC">
                <Contetn>
                  {showerSvgIcon}
                  <ContentName>Shower/WC</ContentName>
                </Contetn>
              </EquipOption>
            </div>
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
