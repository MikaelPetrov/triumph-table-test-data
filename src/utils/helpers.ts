import { DropResult } from "react-beautiful-dnd";
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

export function toDragElem(result: DropResult, tableData: TypeObjectData[]) {
  const items = Array.from(tableData);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination!?.index, 0, reorderedItem);
  return items;
}

export const setLocalStorage = (storage: TypeObjectData[]): void => {
  localStorage.setItem("storage", JSON.stringify(storage));
};

export const getLocalStorage = () =>
  localStorage.getItem("storage")
    ? JSON.parse(localStorage.getItem("storage")!)
    : [];
