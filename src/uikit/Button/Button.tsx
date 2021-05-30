import { memo } from "react";
import { StyledButton } from "./styles";
import { StyleProps } from "./types";

type Props = {
  onClick?: (e: Event) => void;
};

function Button(props: Props & StyleProps): JSX.Element {
  const buttonStyleProps = {
    onClick: props.onClick,
    margin: props.margin,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    borderRadius: props.borderRadius,
    color: props.color,
    backgroundColor: props.backgroundColor,
    backgroundColorModifier: props.backgroundColorModifier,
  };

  return (
    <StyledButton data-name="styled-button" {...buttonStyleProps}>
      {props.children}
    </StyledButton>
  );
}

export default memo(Button);
