import { useEffect, useState } from "react";
import { TypeObjectData } from "../components/Form/types";

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
    if (objectData) {
      setTableData((prevState: TypeObjectData[]) =>
        prevState.concat(objectData!)
      );
    }
  }, [objectData]);

  useEffect(() => {
    const data = tableData.filter((value) => value.name === nameToView);
    setTableInfo(data);
  }, [nameToView, tableData]);

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
