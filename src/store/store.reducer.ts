import { produce } from "immer";
import { Actions } from "./store.actions";
import { Store } from "./index";

export const reducer = (state: Store, action: Actions): Store => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "COUNT_SET_COUNT":
        draftState.count = action.count;
        break;
      case "COUNT_INCREASE_COUNT":
        draftState.count = state.count + 1;
        break;
      case "COUNT_DECREASE_COUNT":
        draftState.count = state.count - 1;
        break;
      case "THEME_TOGGLE_THEME":
        draftState.theme = state.theme === "dark" ? "light" : "dark";
        break;
      case "THEME_SET_LIGHT_THEME":
        draftState.theme = "light";
        break;
      case "THEME_SET_DARK_THEME":
        draftState.theme = "dark";
        break;
      default:
        throw new Error("Invalid action type");
    }
  });
};
