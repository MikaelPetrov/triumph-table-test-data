import { TypeObjectData } from "../types/types";

export function toFilterName(name: string, tableData: TypeObjectData[]) {
  const filteredName = tableData.filter(
    (objectData: TypeObjectData) => objectData.name === name
  )[0]?.name;
  return filteredName;
}

export function toFindIndex(name: string, tableData: TypeObjectData[]) {
  const elemIndex = tableData.findIndex((value) => value.name === name);
  return elemIndex;
}

export function toEditElem(
  index: number,
  objectData: TypeObjectData,
  prevState: TypeObjectData[]
) {
  const currentState = [...prevState];
  currentState.splice(index, 1, objectData);
  return currentState;
}

export const setLocalStorage = (storage: TypeObjectData[]): void => {
  localStorage.setItem("storage", JSON.stringify(storage));
};

export const getLocalStorage = () =>
  localStorage.getItem("storage")
    ? JSON.parse(localStorage.getItem("storage")!)
    : [];
