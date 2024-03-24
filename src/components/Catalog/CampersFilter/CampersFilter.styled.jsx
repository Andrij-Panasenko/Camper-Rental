import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  color: ${(p) => p.theme.colors.black};

  background-color: ${(p) => p.theme.colors.inputs};
`;

export const MapPin = styled.svg`
  width: 18px;
  height: 20px;
  position: absolute;
  top: 57%;
  left: 10px;
  transform: translate(50%);
`;

export const Filters = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 14px;

  color: ${(p) => p.theme.colors.black};
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 1.2;

  color: ${(p) => p.theme.colors.black};
`;

export const LineSvg = styled.svg`
  width: 360px;
  height: 2px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const EquipmentList = styled.ul`
  width: 360px;
  display: flex;

  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  margin-bottom: 32px;
`;

export const EquipButton = styled.li`
  border-radius: 10px;
  width: 111px;
  height: 95px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const ContentName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  margin-top: 8px;
`;

export const Contetn = styled.div`
  text-align: center;
`;

export const FilterIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

export const VehicleList = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 64px;
`;

export const VehicleType = styled.li`
  display: flex;
  gap: 8px;
  flex-basis: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  width: 100px;
  height: 95px;
`;

export const VehicleName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  color: ${(p) => p.theme.colors.black};
`;

export const VehicleTypeSvg = styled.svg`
  width: 40px;
  height: 28px;
`;

export const SubmitBtn = styled.button`
  display: block;
  padding: 16px 60px;
  background-color: ${(p) => p.theme.colors.red};
  color: #ffffff;
  border: none;
  border-radius: 200px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: background-color ${(p) => p.theme.transition};

  &:hover,
  :focus {
    background-color: #d84343;
  }
`;
