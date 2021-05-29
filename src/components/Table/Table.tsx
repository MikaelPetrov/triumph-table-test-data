import { memo } from "react";
import { TypeMode, TypeObjectData } from "../../types/types";
import Img from "../../uikit/Img/Img";
import { tableHeader, tableIcons } from "./constants";
import "./Table.module.css";
import styles from "./Table.module.css";

type Props = {
  tableData: TypeObjectData[];
  setMode: React.Dispatch<React.SetStateAction<TypeMode>>;
};

const Table: React.FC<Props> = (props) => {
  return (
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
          <tr key={item.name} className={styles.row}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.color}</td>
            <td>
              {tableIcons.map((icon) => (
                <Img
                  key={icon.id}
                  src={icon.icon}
                  onClick={() =>
                    props.setMode({
                      type: icon.type,
                      name: item.name,
                    })
                  }
                />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
