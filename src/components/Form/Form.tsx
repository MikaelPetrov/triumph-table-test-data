import React, { memo } from "react";
import { SketchPicker } from "react-color";
import iconColorPicker from "../../assets/iconColorPicker.png";
import { initObjectData } from "../../hooks/useAppState";
import {
  FormMethod,
  TypeChange,
  TypeColor,
  TypeMode,
  TypeObjectData,
  TypeSubmit,
} from "../../types/types";
import Button from "../../uikit/Button";
import Img from "../../uikit/Img";
import { toFilterName } from "../../utils/helpers";
import { MODE_VIEW } from "../Table/constants";
import { COLOR, formElements, NAME, TYPE } from "./constants";
import Info from "./Info";
import {
  FormButton,
  FormError,
  FormField,
  FormInput,
  FormPicker,
  FormWrapper,
  iconPicker,
} from "./styles";

type Props = {
  mode: TypeMode;
  method: FormMethod;
  tempData: TypeObjectData;
  tableData: TypeObjectData[];
  tableInfo: TypeObjectData[];
  color: TypeColor;
  isPicker: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTempData: React.Dispatch<React.SetStateAction<TypeObjectData>>;
  setObjectData: React.Dispatch<React.SetStateAction<TypeObjectData>>;
  setTableData: React.Dispatch<React.SetStateAction<TypeObjectData[]>>;
  setColor: React.Dispatch<React.SetStateAction<TypeColor>>;
  setIsPicker: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form: React.FC<Props> = (props) => {
  const inputValue = (type: string) => {
    switch (type) {
      case NAME:
        return props.tempData.name;
      case TYPE:
        return props.tempData.type;
      case COLOR:
        return props.tempData.color;
      default:
        break;
    }
  };

  const handleChange = (type: string) => {
    switch (type) {
      case NAME:
        return (event: TypeChange) =>
          props.setTempData({
            name: event.currentTarget.value,
            type: props.tempData.type,
            color: props.tempData.color,
          });
      case TYPE:
        return (event: TypeChange) =>
          props.setTempData({
            name: props.tempData.name,
            type: event.currentTarget.value,
            color: props.tempData.color,
          });
      case COLOR:
        return (event: TypeChange) =>
          props.setTempData({
            name: props.tempData.name,
            type: props.tempData.type,
            color: event.currentTarget.value,
          });
      default:
        break;
    }
  };

  const handleChangeColor = (color: { hex: string }) => {
    props.setColor({ background: color.hex });
    props.setTempData({
      name: props.tempData.name,
      type: props.tempData.type,
      color: color.hex,
    });
  };

  const handleSubmit = (event: TypeSubmit) => {
    event.preventDefault();

    if (props.method === FormMethod.CREATE) props.setObjectData(props.tempData);

    if (props.method === FormMethod.UPDATE) {
      const editElemIndex = props.tableData.findIndex(
        (value) => value.name === props.mode.name
      );
      props.setTableData((prevState) => {
        const currentState = [...prevState];
        currentState.splice(editElemIndex, 1, props.tempData);
        return currentState;
      });
    }

    props.closeModal(false);
    props.setTempData(initObjectData);
  };

  const handlePicker = () => {
    props.setIsPicker((prevState) => !prevState);
  };

  return (
    <FormWrapper onSubmit={handleSubmit} data-name="form-wrapper">
      {props.mode.type === MODE_VIEW ? (
        <Info tableInfo={props.tableInfo} />
      ) : (
        <>
          {formElements.map((input) => (
            <FormField
              key={input.id}
              name={props.tempData.name}
              isPicker={props.isPicker}
              data-name="form-field"
            >
              <label htmlFor={input.id}>{input.label}</label>
              <FormInput
                id={input.id}
                type={input.type}
                value={inputValue(input.name)}
                onChange={handleChange(input.name)}
                placeholder={input.placeholder}
                data-name="form-input"
              />
              {input.name === COLOR && (
                <Img
                  onClick={() => handlePicker()}
                  src={iconColorPicker}
                  {...iconPicker}
                />
              )}
            </FormField>
          ))}
          {props.isPicker && (
            <FormPicker name={props.isPicker} data-name="form-picker">
              <SketchPicker
                color={props.color.background}
                onChange={handleChangeColor}
                disableAlpha
              />
            </FormPicker>
          )}
          {props.tempData.name &&
            (props.tempData.name !==
              toFilterName(props.tempData.name, props.tableData) ||
            props.mode.name === props.tempData.name ? (
              <Button {...FormButton}>Submit</Button>
            ) : (
              <FormError>Name already entered!</FormError>
            ))}
        </>
      )}
    </FormWrapper>
  );
};

export default memo(Form);
