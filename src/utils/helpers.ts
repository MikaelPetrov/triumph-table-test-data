import { TypeObjectData } from "../types/types";

export function toFilterName(name: string, tableData: TypeObjectData[]) {
  const filteredName = tableData.filter(
    (obj: TypeObjectData) => obj.name === name
  )[0]?.name;
  return filteredName;
}

export const setStorage = (storage: TypeObjectData[]): void => {
  localStorage.setItem("storage", JSON.stringify(storage));
};

export const getStorage = () =>
  localStorage.getItem("storage")
    ? JSON.parse(localStorage.getItem("storage")!)
    : [];
