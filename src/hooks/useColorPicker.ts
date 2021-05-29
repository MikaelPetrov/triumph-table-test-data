import { useState } from "react";
import { TypeColor } from "./../types/types";
import { TypeColorPicker } from "./types";

export const initColor = {
  background: "#fff",
};

export function useColorPicker(): TypeColorPicker {
  const [color, setColor] = useState<TypeColor>(initColor);
  const [isPicker, setIsPicker] = useState(false);

  return {
    color,
    isPicker,
    setColor,
    setIsPicker,
  };
}
