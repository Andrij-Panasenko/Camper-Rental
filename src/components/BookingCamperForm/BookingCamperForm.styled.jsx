import styled from "styled-components";
import { Field as FormikField, Form as FormikForm } from "formik";

export const FormTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.black};
`;

export const FormSubtitle = styled.p`
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${(p) => p.theme.colors.grey};
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 448px;
  height: 532px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
`;

export const Field = styled(FormikField)`
  border-radius: 10px;
  padding: 18px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 14px;
  outline: none;

  background-color: ${(p) => p.theme.colors.inputs};
  color: ${(p) => p.theme.colors.black};

  &::placeholder {
    font-size: 16px;
    line-height: 1.25;
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const Textarea = styled(FormikField)`
  resize: none;
  border-radius: 10px;
  padding: 18px;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 24px;

  outline: none;

  border: 1px solid rgba(16, 24, 40, 0.2);
  background-color: ${(p) => p.theme.colors.inputs};
  color: ${(p) => p.theme.colors.black};

  height: 114px;

  &::placeholder {
    font-size: 16px;
    line-height: 1.25;
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const SendButton = styled.button`
  border: none;
  border-radius: 200px;
  outline: none;
  padding: 16px 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  width: 160px;
  height: 56px;
  color: #ffffff;
  background-color: ${(p) => p.theme.colors.red};

  transition: background-color ${(p) => p.theme.transition};

  &:hover, :focus {
    background-color: ${(p) => p.theme.colors.hoverRed};
  }
`;
