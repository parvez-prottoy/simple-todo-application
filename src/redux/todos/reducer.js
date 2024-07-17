import {
  ADDED,
  CLEARED,
  COLORCHANGED,
  COMPLETED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextIdGenerator = (state) => {
  const maxId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
  return maxId + 1;
};
const reducer = (state = [...initialState], action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextIdGenerator(state),
          text: action.payload,
          complete: false,
          color: "",
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      });
    case COLORCHANGED:
      const { todoId, color, colorChange } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        } else {
          switch (colorChange) {
            case "added":
              return {
                ...todo,
                color,
              };
            case "remove":
              return {
                ...todo,
                color: "",
              };

            default:
              return state;
          }
        }
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default reducer;
