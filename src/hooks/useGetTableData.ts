import { useEffect, useState } from "react";
import { TypeObjectData } from "../components/Form/types";
import { getJwtPair, setJwtPair } from "../utils/helpers";

export function useGetTableData() {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [nameToView, setNameToView] = useState<string>("");
  const [nameToChange, setNameToChange] = useState<string>("");
  const [nameToDelete, setNameToDelete] = useState<string>("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [objectData, setObjectData] = useState<TypeObjectData>();
  const [tableData, setTableData] = useState<TypeObjectData[]>([]);
  const [tableInfo, setTableInfo] = useState<TypeObjectData[]>([]);

  useEffect(() => {
    const jwtData = getJwtPair();
    setTableData(jwtData);
  }, []);

  useEffect(() => {
    setJwtPair(tableData);
  }, [tableData]);

  useEffect(() => {
    if (objectData && !nameToChange) {
      setTableData((prevState: TypeObjectData[]) =>
        prevState.concat(objectData!)
      );
    }
    // eslint-disable-next-line
  }, [objectData]);

  useEffect(() => {
    const viewData = tableData.filter((value) => value.name === nameToView);
    setTableInfo(viewData);
  }, [nameToView, tableData]);

  useEffect(() => {
    const objectIndex = tableData.findIndex(
      (value) => value.name === nameToChange
    );
  }, [nameToChange, tableData]);

  useEffect(() => {
    setTableData((prevState: TypeObjectData[]) =>
      prevState.filter((value) => value.name !== nameToDelete)
    );
  }, [nameToDelete]);

  return {
    name,
    type,
    color,
    nameToView,
    nameToChange,
    modalVisibility,
    tableData,
    tableInfo,
    setName,
    setType,
    setColor,
    setObjectData,
    setNameToView,
    setNameToChange,
    setNameToDelete,
    setModalVisibility,
  };
}
