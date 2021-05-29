import { ChangeEvent } from "react";

export type TypeChange = ChangeEvent<HTMLInputElement>;
export type TypeSubmit = React.FormEvent<HTMLFormElement>;

export type TypeColor = {
  background: string;
};

export type TypeMode = {
  type: string;
  name: string;
};

export type TypeObjectData = {
  name: string;
  type: string;
  color: string;
};

export enum FormMethod {
  UPDATE = "UPDATE",
  CREATE = "CREATE",
}
