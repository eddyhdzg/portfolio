export interface State {
  count: number;
  theme: "dark" | "light";
}

export const initialState: State = { count: 10, theme: "dark" };
