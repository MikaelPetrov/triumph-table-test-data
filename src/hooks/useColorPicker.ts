import { useState } from "react";
import { TypeColor } from "./../types/types";
import { TypeColorPicker } from "./types";

export const initColor = {
  background: "#fff",
};

export function useColorPicker(): TypeColorPicker {
  const [color, setColor] = useState<TypeColor>(initColor);
  const [isPicked, setIsPicked] = useState(false);

  return {
    color,
    isPicked,
    setColor,
    setIsPicked,
  };
}
