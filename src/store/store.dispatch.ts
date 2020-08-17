import { Actions } from "./store.actions";

export interface Dispatch {
  dispatch: (args: Actions) => void;
}
