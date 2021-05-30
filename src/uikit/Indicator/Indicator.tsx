import { memo } from "react";
import { StyledIndicator } from "./styles";
import { StyleProps } from "./types";

type Props = {
  onClick?: (e: Event) => void;
};

function Indicator(props: Props & StyleProps): JSX.Element {
  const indicatorStyledProps = {
    onClick: props.onClick,
    backgroundColor: props.backgroundColor,
  };

  return (
    <StyledIndicator data-name="styled-indicator" {...indicatorStyledProps} />
  );
}

export default memo(Indicator);
