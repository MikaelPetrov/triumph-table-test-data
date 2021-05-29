import iconDelete from "../../assets/iconDelete.png";
import iconEdit from "../../assets/iconEdit.png";
import iconEyeSlash from "../../assets/iconEyeSlash.png";

export const MODE_VIEW = "MODE_VIEW";
export const MODE_EDIT = "MODE_EDIT";
export const MODE_DELETE = "MODE_DELETE";

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
    type: MODE_VIEW,
    icon: iconEyeSlash,
  },
  {
    id: "2",
    type: MODE_EDIT,
    icon: iconEdit,
  },
  {
    id: "3",
    type: MODE_DELETE,
    icon: iconDelete,
  },
];
