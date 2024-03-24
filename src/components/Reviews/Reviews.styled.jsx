import styled from "styled-components";

export const ReviewsList = styled.ul`
  max-width: 430px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Head = styled.div`
  display: inline-flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
`;

export const Avatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;

  background-color: ${(p) => p.theme.colors.blockFeatures};

  & > p {
    color: ${(p) => p.theme.colors.red};
    font-weight: 600;
    font-size: 24px;
    line-height: 1.25;
  }
`;

export const StartsWrapper = styled.div`
  display: inline-flex;
  gap: 4px;
`;

export const Name = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 4px;

  color: ${(p) => p.theme.colors.black};
`;

export const Comment = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: ${(p) => p.theme.colors.grey};
`;
