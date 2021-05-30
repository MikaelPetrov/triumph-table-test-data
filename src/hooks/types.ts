import { TypeColor, TypeMode, TypeObjectData } from "../types/types";

export type TypeUseAppState = {
  mode: TypeMode;
  objectData: TypeObjectData;
  tableData: TypeObjectData[];
  modalVisibility: boolean;
  setMode: React.Dispatch<React.SetStateAction<TypeMode>>;
  setObjectData: React.Dispatch<React.SetStateAction<TypeObjectData>>;
  setTableData: React.Dispatch<React.SetStateAction<TypeObjectData[]>>;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TypeColorPicker = {
  color: TypeColor;
  isPicked: boolean;
  setColor: React.Dispatch<React.SetStateAction<TypeColor>>;
  setIsPicked: React.Dispatch<React.SetStateAction<boolean>>;
};
