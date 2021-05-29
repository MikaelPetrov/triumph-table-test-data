import { memo } from "react";
import { StyledImage } from "./styles";
import { StyleProps } from "./types";

type Props = {
  onClick?: (e: Event) => void;
};

function Img(props: Props & StyleProps): JSX.Element {
  const imgStyleProps = {
    onClick: props.onClick,
    src: props.src,
    position: props.position,
    left: props.left,
    bottom: props.bottom,
    height: props.height,
    width: props.width,
    margin: props.margin,
    padding: props.padding,
    color: props.color,
    colorModifier: props.colorModifier,
  };

  return (
    <StyledImage alt="image-icon" data-name="styled-image" {...imgStyleProps} />
  );
}

export default memo(Img);