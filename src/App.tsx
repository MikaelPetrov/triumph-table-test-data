import React, { memo } from "react";
import "./App.css";
import { colors } from "./common/colors";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Table from "./components/Table";
import { MODE_EDIT, MODE_VIEW } from "./components/Table/constants";
import { useGetTableData } from "./hooks/useGetTableData";
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
    setObjectData,
    setModalVisibility,
  } = useGetTableData();

  const changeModalVisibility = (value: boolean) => {
    setModalVisibility(value);
    setMode({ type: "", name: "" });
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
        onOpen={setModalVisibility}
      />
      {modalVisibility && (
        <Modal title={getModalTitle()} onClose={setModalVisibility}>
          <Form
            mode={mode}
            tempData={tempData}
            tableData={tableData}
            tableInfo={tableInfo}
            setTempData={setTempData}
            setObjectData={setObjectData}
            method={
              mode.type === MODE_EDIT ? FormMethod.UPDATE : FormMethod.CREATE
            }
          />
        </Modal>
      )}
      <Button
        margin="0 auto"
        onClick={() => changeModalVisibility(true)}
        backgroundColor={colors.eucalyptus}
        backgroundColorModifier={colors.jungleGreen}
      >
        Create row
      </Button>
    </div>
  );
};

export default memo(App);
