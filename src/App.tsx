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
    objectData,
    tableData,
    modalVisibility,
    setMode,
    setObjectData,
    setTableData,
    setModalVisibility,
  } = useAppState();

  const { color, isPicked, setColor, setIsPicked } = useColorPicker();

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
      <Table
        tableData={tableData}
        setMode={setMode}
        setTableData={setTableData}
      />
      {modalVisibility && (
        <Modal
          title={getModalTitle()}
          setObjectData={setObjectData}
          closeModal={setModalVisibility}
          setIsPicked={setIsPicked}
        >
          <Form
            mode={mode}
            objectData={objectData}
            tableData={tableData}
            color={color}
            isPicked={isPicked}
            setObjectData={setObjectData}
            setTableData={setTableData}
            closeModal={setModalVisibility}
            setColor={setColor}
            setIsPicked={setIsPicked}
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
