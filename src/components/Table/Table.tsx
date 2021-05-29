import { memo } from "react";
import Img from "../../uikit/Img/Img";
import { TypeObjectData } from "../Form/types";
import {
  ICON_DELETE,
  ICON_EDIT,
  ICON_VIEW,
  tableHeader,
  tableIcons,
} from "./constants";
import "./Table.module.css";
import styles from "./Table.module.css";

type Props = {
  tableData: TypeObjectData[];
  setNameToView: (nameToView: string) => void;
  setNameToChange: (nameToChange: string) => void;
  setNameToDelete: (nameToDelete: string) => void;
  onOpen: (value: boolean) => void;
};

const Table: React.FC<Props> = (props) => {
  const setMode = (type: string, name: string) => {
    switch (type) {
      case ICON_VIEW:
        return () => setInfoMode(name);
      case ICON_EDIT:
        return () => setChangeMode(name);
      case ICON_DELETE:
        return () => props.setNameToDelete(name);
      default:
        break;
    }
  };

  const setInfoMode = (name: string) => {
    props.setNameToView(name);
    props.onOpen(true);
  };

  const setChangeMode = (name: string) => {
    props.setNameToChange(name);
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
            <tr key={item?.name} className={styles.row}>
              <td>{item?.name}</td>
              <td>{item?.type}</td>
              <td>{item?.color}</td>
              <td>
                {tableIcons.map((icon) => (
                  <Img
                    key={icon.id}
                    src={icon.icon}
                    onClick={setMode(icon.type, item.name)}
                  />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
