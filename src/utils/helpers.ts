import { TypeObjectData } from "./../components/Form/types";

export function toObjectData(name: string, type: string, color: string) {
  return {
    name: name,
    type: type,
    color: color,
  };
}

export function toFilterName(name: string, tableData: TypeObjectData[]) {
  const filteredName = tableData.filter(
    (obj: TypeObjectData) => obj.name === name
  )[0]?.name;
  return filteredName;
}

export const setJwtPair = (jwtPair: TypeObjectData[]): void => {
  localStorage.setItem("jwtPair", JSON.stringify(jwtPair));
};

export const getJwtPair = () =>
  localStorage.getItem("jwtPair")
    ? JSON.parse(localStorage.getItem("jwtPair")!)
    : [];
