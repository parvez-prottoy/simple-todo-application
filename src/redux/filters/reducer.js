import { COLORSSELECTED, STATUSCHANGED } from "./actionTypes";
import { initialState } from "./initialState";

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORSSELECTED:
      const { color, selectType } = action.payload;
      switch (selectType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
