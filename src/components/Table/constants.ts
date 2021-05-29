import iconDelete from "../../assets/iconDelete.png";
import iconEdit from "../../assets/iconEdit.png";
import iconEyeSlash from "../../assets/iconEyeSlash.png";

export const ICON_VIEW = "ICON_VIEW";
export const ICON_EDIT = "ICON_EDIT";
export const ICON_DELETE = "ICON_DELETE";

export const tableHeader = [
  {
    id: "1",
    text: "Name",
  },
  {
    id: "2",
    text: "Type",
  },
  {
    id: "3",
    text: "Color",
  },
  {
    id: "4",
    text: "Action",
  },
];

export const tableIcons = [
  {
    id: "1",
    type: ICON_VIEW,
    icon: iconEyeSlash,
  },
  {
    id: "2",
    type: ICON_EDIT,
    icon: iconEdit,
  },
  {
    id: "3",
    type: ICON_DELETE,
    icon: iconDelete,
  },
];
