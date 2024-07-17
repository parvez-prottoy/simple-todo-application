import { COLORSSELECTED, STATUSCHANGED } from "./actionTypes";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
export const colorsSelected = (color, selectType) => {
  return {
    type: COLORSSELECTED,
    payload: {
      color,
      selectType,
    },
  };
};
