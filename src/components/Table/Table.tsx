import React, { memo } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { TypeMode, TypeObjectData } from "../../types/types";
import Img from "../../uikit/Img/Img";
import Indicator from "../../uikit/Indicator";
import { toDragElem } from "../../utils/helpers";
import { tableHeader, tableIcons } from "./constants";
import "./Table.module.css";
import styles from "./Table.module.css";

type Props = {
  tableData: TypeObjectData[];
  setMode: React.Dispatch<React.SetStateAction<TypeMode>>;
  setTableData: React.Dispatch<React.SetStateAction<TypeObjectData[]>>;
};

const Table: React.FC<Props> = (props) => {
  const handleOnDragEnd = (result: DropResult) => {
    const items = toDragElem(result, props.tableData);
    props.setTableData(items);
  };

  const onSetMode = (type: string, name: string) => {
    props.setMode({
      type: type,
      name: name,
    });
  };

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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="table-rows">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {props.tableData.map((item, index) => (
                <Draggable
                  key={item.name}
                  draggableId={item.name}
                  index={index}
                >
                  {(provided) => (
                    <tr
                      className={styles.row}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>
                        {item.color}
                        <Indicator backgroundColor={item.color} />
                      </td>
                      <td>
                        {tableIcons.map((icon) => (
                          <Img
                            key={icon.id}
                            src={icon.icon}
                            onClick={() => onSetMode(icon.type, item.name)}
                          />
                        ))}
                      </td>
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  );
};

export default memo(Table);
