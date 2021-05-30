import { memo } from "react";
import { TypeObjectData } from "../../../types/types";
import Indicator from "../../../uikit/Indicator";
import { GROUP_COLOR, GROUP_NAME, GROUP_TYPE, infoItems } from "./constants";
import { InfoHeader, InfoItem } from "./styles";

type Props = {
  objectData: TypeObjectData;
};

const Info: React.FC<Props> = (props) => {
  const getInfoItem = (group: string, info: TypeObjectData) => {
    switch (group) {
      case GROUP_NAME:
        return <>{info.name}</>;
      case GROUP_TYPE:
        return <>{info.type}</>;
      case GROUP_COLOR:
        return (
          <>
            {info.color}
            <Indicator backgroundColor={info.color} />
          </>
        );
      default:
        break;
    }
  };

  return (
    <>
      {infoItems.map((item) => (
        <InfoItem key={item.id} data-name="info-item">
          <InfoHeader data-name="info-header">{item.name}</InfoHeader>
          {getInfoItem(item.group, props.objectData)}
        </InfoItem>
      ))}
    </>
  );
};

export default memo(Info);
