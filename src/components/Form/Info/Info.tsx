import { memo } from "react";
import { TypeObjectData } from "../types";
import { GROUP_COLOR, GROUP_NAME, GROUP_TYPE, infoItems } from "./constants";
import { InfoContent, InfoHeader, InfoItem } from "./styles";

type Props = {
  tableInfo: TypeObjectData[];
};

const Info: React.FC<Props> = (props) => {
  const getInfoItem = (type: string, info: TypeObjectData) => {
    switch (type) {
      case GROUP_NAME:
        return <div>{info.name}</div>;
      case GROUP_TYPE:
        return <div>{info.type}</div>;
      case GROUP_COLOR:
        return <div>{info.color}</div>;
      default:
        break;
    }
  };

  return (
    <>
      {props.tableInfo.map((info) => (
        <InfoContent key={info.name} data-name="info-content">
          {infoItems.map((item) => (
            <InfoItem key={item.id} data-name="info-item">
              <InfoHeader>{item.name}</InfoHeader>
              {getInfoItem(item.group, info)}
            </InfoItem>
          ))}
        </InfoContent>
      ))}
    </>
  );
};

export default memo(Info);
