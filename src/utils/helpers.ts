import { TypeObjectData } from "../types/types";

export function toFilterName(name: string, tableData: TypeObjectData[]) {
  const filteredName = tableData.filter(
    (obj: TypeObjectData) => obj.name === name
  )[0]?.name;
  return filteredName;
}

export const setLocalStorage = (storage: TypeObjectData[]): void => {
  localStorage.setItem("storage", JSON.stringify(storage));
};

export const getLocalStorage = () =>
  localStorage.getItem("storage")
    ? JSON.parse(localStorage.getItem("storage")!)
    : [];
