import React, { memo } from "react";
import Button from "../../uikit/Button";
import { toFilterName, toObjectData } from "../../utils/helpers";
import { COLOR, formElements, NAME, TYPE } from "./constants";
import Info from "./Info";
import {
  FormButton,
  FormError,
  FormField,
  FormInput,
  FormWrapper,
} from "./styles";
import { FormMethod, TypeChange, TypeObjectData, TypeSubmit } from "./types";

type Props = {
  name: string;
  type: string;
  color: string;
  nameToView: string;
  nameToChange: string;
  method: FormMethod;
  tableData: TypeObjectData[];
  tableInfo: TypeObjectData[];
  setName: (name: string) => void;
  setType: (type: string) => void;
  setColor: (color: string) => void;
  setObjectData: (objectData: TypeObjectData) => void;
};

const Form: React.FC<Props> = (props) => {
  const inputValue = (type: string) => {
    switch (type) {
      case NAME:
        return props.name;
      case TYPE:
        return props.type;
      case COLOR:
        return props.color;
      default:
        break;
    }
  };

  const handleChange = (type: string) => {
    switch (type) {
      case NAME:
        return (event: TypeChange) => props.setName(event.currentTarget.value);
      case TYPE:
        return (event: TypeChange) => props.setType(event.currentTarget.value);
      case COLOR:
        return (event: TypeChange) => props.setColor(event.currentTarget.value);
      default:
        break;
    }
  };

  const handleSubmit = (event: TypeSubmit) => {
    event.preventDefault();
    props.setObjectData(toObjectData(props.name, props.type, props.color));
    props.setName("");
    props.setType("");
    props.setColor("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit} data-name="form-wrapper">
      {props.nameToView ? (
        <Info tableInfo={props.tableInfo} />
      ) : (
        <>
          {formElements.map((input) => (
            <FormField name={props.name} key={input.id} data-name="form-field">
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
          {props.name &&
            (props.name !== toFilterName(props.name, props.tableData) ||
            props.nameToChange ? (
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
