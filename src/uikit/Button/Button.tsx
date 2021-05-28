import { memo } from "react";
import { StyledButton } from "./styles";
import { StyleProps } from "./types";

type Props = {
  onClick?: (e: Event) => void;
};

function Button(props: Props & StyleProps): JSX.Element {
  const buttonStyleProps = {
    onClick: props.onClick,
    height: props.height,
    width: props.width,
    maxWidth: props.maxWidth,
    margin: props.margin,
    padding: props.padding,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    isRowReversed: props.isRowReversed,
    borderRadius: props.borderRadius,
    color: props.color,
    backgroundColor: props.backgroundColor,
    textDecoration: props.textDecoration,
    colorModifier: props.colorModifier,
    backgroundColorModifier: props.backgroundColorModifier,
    boxShadowModifier: props.boxShadowModifier,
  };

  return (
    <StyledButton data-name="styled-button" {...buttonStyleProps}>
      {props.children}
    </StyledButton>
  );
}

export default memo(Button);
