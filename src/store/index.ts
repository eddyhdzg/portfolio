import { create } from "zustand";
import { Actions } from "./store.actions";
import { initialState, State } from "./store.state";
import { reducer } from "./store.reducer";
import { Dispatch } from "./store.dispatch";

export interface Store extends State, Dispatch {}

const [useStore] = create<Store>((set) => ({
  ...initialState,
  dispatch: (args: Actions) => set((state: Store) => reducer(state, args)),
}));

export { useStore };
