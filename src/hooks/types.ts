import { TypeColor, TypeMode, TypeObjectData } from "../types/types";

export type TypeUseAppState = {
  mode: TypeMode;
  tempData: TypeObjectData;
  tableData: TypeObjectData[];
  tableInfo: TypeObjectData[];
  modalVisibility: boolean;
  setMode: React.Dispatch<React.SetStateAction<TypeMode>>;
  setTempData: React.Dispatch<React.SetStateAction<TypeObjectData>>;
  setTableData: React.Dispatch<React.SetStateAction<TypeObjectData[]>>;
  setObjectData: React.Dispatch<React.SetStateAction<TypeObjectData>>;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TypeColorPicker = {
  color: TypeColor;
  isPicker: boolean;
  setColor: React.Dispatch<React.SetStateAction<TypeColor>>;
  setIsPicker: React.Dispatch<React.SetStateAction<boolean>>;
};
