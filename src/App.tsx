import React, { memo } from "react";
import "./App.css";
import { colors } from "./common/colors";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Table from "./components/Table";
import { MODE_EDIT, MODE_VIEW } from "./components/Table/constants";
import { initMode, useAppState } from "./hooks/useAppState";
import { useColorPicker } from "./hooks/useColorPicker";
import { FormMethod } from "./types/types";
import Button from "./uikit/Button";

const App = () => {
  const {
    mode,
    tempData,
    tableData,
    tableInfo,
    modalVisibility,
    setMode,
    setTempData,
    setTableData,
    setObjectData,
    setModalVisibility,
  } = useAppState();

  const { color, isPicker, setColor, setIsPicker } = useColorPicker();

  const openModalWindow = () => {
    setModalVisibility(true);
    setMode(initMode);
  };

  const getModalTitle = () => {
    if (mode.type === MODE_VIEW) {
      return "View: " + mode.name;
    }
    if (mode.type === MODE_EDIT) {
      return "Edit: " + mode.name;
    }
    return "Row creation";
  };

  return (
    <div className="App">
      <Table tableData={tableData} setMode={setMode} />
      {modalVisibility && (
        <Modal
          title={getModalTitle()}
          setTempData={setTempData}
          closeModal={setModalVisibility}
        >
          <Form
            mode={mode}
            tempData={tempData}
            tableData={tableData}
            tableInfo={tableInfo}
            color={color}
            isPicker={isPicker}
            setTempData={setTempData}
            setTableData={setTableData}
            setObjectData={setObjectData}
            closeModal={setModalVisibility}
            setColor={setColor}
            setIsPicker={setIsPicker}
            method={
              mode.type === MODE_EDIT ? FormMethod.UPDATE : FormMethod.CREATE
            }
          />
        </Modal>
      )}
      <Button
        margin="0 auto"
        onClick={() => openModalWindow()}
        backgroundColor={colors.eucalyptus}
        backgroundColorModifier={colors.jungleGreen}
      >
        Create row
      </Button>
    </div>
  );
};

export default memo(App);
