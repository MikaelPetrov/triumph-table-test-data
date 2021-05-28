import { memo } from "react";
import { TypeObjectData } from "../Form/types";
import { tableHeader } from "./constants";
import "./Table.module.css";

type Props = {
  tableData: TypeObjectData[];
  setNameToView: (nameToView: string) => void;
  setNameToChange: (nameToChange: string) => void;
  setNameToDelete: (nameToDelete: string) => void;
  onOpen: (value: boolean) => void;
};

const Table: React.FC<Props> = (props) => {
  const setInfoMode = (name: string) => {
    props.setNameToView(name);
    props.onOpen(true);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeader.map((header) => (
              <th key={header.id} scope="col">
                {header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((item) => (
            <tr key={item?.name}>
              <td>{item?.name}</td>
              <td>{item?.type}</td>
              <td>{item?.color}</td>
              <td>
                <span onClick={() => setInfoMode(item.name)}>sh</span>
                <span onClick={() => props.setNameToChange(item.name)}>ed</span>
                <span onClick={() => props.setNameToDelete(item.name)}>de</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
