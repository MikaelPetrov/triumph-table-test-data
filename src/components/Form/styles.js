import styled from "styled-components";
import { colors } from "../../common/colors";

export const FormWrapper = styled.form`
  font-weight: 500;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const FormPicker = styled.div`
  position: absolute;
  left: 50px;
  top: 290px;
  opacity: 0.8;
`;

export const FormInput = styled.input`
  width: 70%;
  padding: 8px;
  outline: none;
  color: ${colors.gray20};
  background: ${colors.white};
  border: 1px solid ${colors.trolleyGrey};
  border-radius: 6px;

  &:focus {
    transition: 0.15s ease-in-out;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.05);
    border-color: ${colors.chineseSilver};
  }

  &::placeholder {
    color: ${colors.darkGray};
    opacity: 0.8;
  }
`;

export const FormError = styled.div`
  height: 40px;
  padding: 0 16px;
  color: ${colors.red};
`;

export const FormButton = {
  margin: "0 auto",
  backgroundColor: colors.eucalyptus,
  backgroundColorModifier: colors.jungleGreen,
};

export const iconPicker = {
  position: "relative",
  left: "104px",
  bottom: "24px",
};
