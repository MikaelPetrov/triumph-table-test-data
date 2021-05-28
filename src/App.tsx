import React, { memo } from "react";
import "./App.css";
import { colors } from "./common/colors";
import Form from "./components/Form";
import { FormMethod } from "./components/Form/types";
import Modal from "./components/Modal";
import Table from "./components/Table";
import { useGetTableData } from "./hooks/useGetTableData";
import Button from "./uikit/Button";

const App = () => {
  const {
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
  } = useGetTableData();

  const changeModalVisibility = (value: boolean) => {
    setModalVisibility(value);
    setNameToView("");
    setNameToChange("");
  };

  const changeModalTitle = () => {
    if (nameToView) {
      return nameToView;
    }
    if (nameToChange) {
      return nameToChange;
    }
    return "Row creation";
  };

  return (
    <div className="App">
      <Table
        tableData={tableData}
        setNameToView={setNameToView}
        setNameToChange={setNameToChange}
        setNameToDelete={setNameToDelete}
        onOpen={setModalVisibility}
      />
      {modalVisibility && (
        <Modal title={changeModalTitle()} onClose={setModalVisibility}>
          <Form
            name={name}
            type={type}
            color={color}
            nameToView={nameToView}
            tableData={tableData}
            tableInfo={tableInfo}
            setName={setName}
            setType={setType}
            setColor={setColor}
            setObjectData={setObjectData}
            method={FormMethod.CREATE}
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
