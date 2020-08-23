import { produce } from "immer";
import { Actions } from "./store.actions";
import { Store } from "./index";

export const reducer = (state: Store, action: Actions): Store => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "THEME_TOGGLE_THEME":
        draftState.themeType = state.themeType === "dark" ? "light" : "dark";
        break;
      case "THEME_SET_LIGHT_THEME":
        draftState.themeType = "light";
        break;
      case "THEME_SET_DARK_THEME":
        draftState.themeType = "dark";
        break;
      case "LOADINGTHEME_SET_FALSE":
        draftState.loadingTheme = false;
        break;
      default:
        throw new Error("Invalid action type");
    }
  });
};
