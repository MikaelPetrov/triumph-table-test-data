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
import { toEditElem, toFilterName, toFindIndex } from "../../utils/helpers";
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
  objectData: TypeObjectData;
  tableData: TypeObjectData[];
  color: TypeColor;
  isPicked: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setObjectData: React.Dispatch<React.SetStateAction<TypeObjectData>>;
  setTableData: React.Dispatch<React.SetStateAction<TypeObjectData[]>>;
  setColor: React.Dispatch<React.SetStateAction<TypeColor>>;
  setIsPicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form: React.FC<Props> = (props) => {
  const inputValue = (type: string) => {
    switch (type) {
      case NAME:
        return props.objectData.name;
      case TYPE:
        return props.objectData.type;
      case COLOR:
        return props.objectData.color;
      default:
        break;
    }
  };

  const handleChange = (type: string) => {
    switch (type) {
      case NAME:
        return (event: TypeChange) =>
          props.setObjectData({
            name: event.currentTarget.value,
            type: props.objectData.type,
            color: props.objectData.color,
          });
      case TYPE:
        return (event: TypeChange) =>
          props.setObjectData({
            name: props.objectData.name,
            type: event.currentTarget.value,
            color: props.objectData.color,
          });
      case COLOR:
        return (event: TypeChange) =>
          props.setObjectData({
            name: props.objectData.name,
            type: props.objectData.type,
            color: event.currentTarget.value,
          });
      default:
        break;
    }
  };

  const handleChangeColor = (color: { hex: string }) => {
    props.setColor({ background: color.hex });
    props.setObjectData({
      name: props.objectData.name,
      type: props.objectData.type,
      color: color.hex,
    });
  };

  const handleSubmit = (event: TypeSubmit) => {
    event.preventDefault();

    if (props.method === FormMethod.CREATE) {
      if (props.objectData.name) {
        props.setTableData((prevState: TypeObjectData[]) =>
          prevState.concat(props.objectData)
        );
      }
    }
    if (props.method === FormMethod.UPDATE) {
      const editElemIndex = toFindIndex(props.mode.name, props.tableData);
      props.setTableData((prevState) =>
        toEditElem(editElemIndex, props.objectData, prevState)
      );
    }

    props.closeModal(false);
    props.setObjectData(initObjectData);
  };

  const handlePicker = () => {
    props.setIsPicked((prevState) => !prevState);
  };

  return (
    <FormWrapper onSubmit={handleSubmit} data-name="form-wrapper">
      {props.mode.type === MODE_VIEW ? (
        <Info objectData={props.objectData} />
      ) : (
        <>
          {formElements.map((input) => (
            <FormField key={input.id} data-name="form-field">
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
          {props.isPicked && (
            <FormPicker data-name="form-picker">
              <SketchPicker
                color={props.color.background}
                onChange={handleChangeColor}
                disableAlpha
              />
            </FormPicker>
          )}
          {props.objectData.name &&
            (props.objectData.name !==
              toFilterName(props.objectData.name, props.tableData) ||
            props.mode.name === props.objectData.name ? (
              <Button {...FormButton}>Submit</Button>
            ) : (
              <FormError data-name="form-error">
                Name already entered!
              </FormError>
            ))}
        </>
      )}
    </FormWrapper>
  );
};

export default memo(Form);
