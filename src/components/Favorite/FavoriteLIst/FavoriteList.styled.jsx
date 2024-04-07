import styled from "styled-components";

export const EmptyMsgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const EmtyListMsg = styled.p`
  max-width: 700px;
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  color: ${(p) => p.theme.colors.black};
`;
