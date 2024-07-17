import {
  ADDED,
  CLEARED,
  COLORCHANGED,
  COMPLETED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const colorChanged = (todoId, color, colorChange) => {
  return {
    type: COLORCHANGED,
    payload: {
      todoId,
      color,
      colorChange,
    },
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
export const completed = () => {
  return {
    type: COMPLETED,
  };
};
export const cleared = () => {
  return {
    type: CLEARED,
  };
};
