import React, { memo } from "react";
import {
  FormMethod,
  TypeChange,
  TypeMode,
  TypeObjectData,
  TypeSubmit,
} from "../../types/types";
import Button from "../../uikit/Button";
import { toFilterName } from "../../utils/helpers";
import { MODE_VIEW } from "../Table/constants";
import { COLOR, formElements, NAME, TYPE } from "./constants";
import Info from "./Info";
import {
  FormButton,
  FormError,
  FormField,
  FormInput,
  FormWrapper,
} from "./styles";

type Props = {
  mode: TypeMode;
  method: FormMethod;
  tempData: TypeObjectData;
  tableData: TypeObjectData[];
  tableInfo: TypeObjectData[];
  setTempData: (tempData: TypeObjectData) => void;
  setObjectData: (objectData: TypeObjectData) => void;
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

  const handleSubmit = (event: TypeSubmit) => {
    event.preventDefault();
    if (props.method === FormMethod.CREATE) {
      props.setObjectData({
        name: props.tempData.name,
        type: props.tempData.type,
        color: props.tempData.color,
      });
    }
    props.setTempData({
      name: "",
      type: "",
      color: "",
    });
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
            </FormField>
          ))}
          {props.tempData.name &&
            (props.tempData.name !==
              toFilterName(props.tempData.name, props.tableData) ||
            props.mode.type === MODE_VIEW ? (
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
