import { useEffect, useState } from "react";
import {
  MODE_DELETE,
  MODE_EDIT,
  MODE_VIEW,
} from "../components/Table/constants";
import { TypeMode, TypeObjectData } from "../types/types";
import { getLocalStorage, setLocalStorage } from "../utils/helpers";
import { TypeUseAppState } from "./types";

export const initMode = {
  type: "",
  name: "",
};

export const initObjectData = {
  name: "",
  type: "",
  color: "",
};

export function useAppState(): TypeUseAppState {
  const [mode, setMode] = useState<TypeMode>(initMode);
  const [objectData, setObjectData] = useState<TypeObjectData>(initObjectData);
  const [tableData, setTableData] = useState<TypeObjectData[]>([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    const localStorageData = getLocalStorage();
    setTableData(localStorageData);
  }, []);

  useEffect(() => {
    setLocalStorage(tableData);
  }, [tableData]);

  useEffect(() => {
    switch (mode.type) {
      case MODE_VIEW:
      case MODE_EDIT:
        return viewEditMode();
      case MODE_DELETE:
        return deleteMode();
      default:
        break;
    }
    // eslint-disable-next-line
  }, [mode]);

  const viewEditMode = () => {
    setModalVisibility(true);

    const viewRow = tableData.find((value) => value.name === mode.name);
    if (viewRow) setObjectData(viewRow);
  };

  const deleteMode = () => {
    setTableData((prevState: TypeObjectData[]) =>
      prevState.filter((value) => value.name !== mode.name)
    );
  };

  return {
    mode,
    objectData,
    tableData,
    modalVisibility,
    setMode,
    setObjectData,
    setTableData,
    setModalVisibility,
  };
}
