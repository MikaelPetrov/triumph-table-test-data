import styled from "styled-components";
import { colors } from "../../common/colors";

export const FormWrapper = styled.form`
  font-size: 1rem;
  font-weight: 500;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  &:last-child {
    margin-bottom: 40px;
    ${({ name }) => `margin-bottom: ${!name ? "100px" : "0"}`};
  }
`;

export const FormInput = styled.input`
  width: 70%;
  padding: 10px;
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

export const FormButton = {
  height: "40px",
  margin: "0 auto 40px",
  padding: "0 16px",
  boxShadow: "none",
  backgroundColor: colors.eucalyptus,
  backgroundColorModifier: colors.jungleGreen,
};

export const FormError = styled.div`
  height: 40px;
  margin: 0 auto 40px;
  padding: 0 16px;
  color: ${colors.red};
`;
