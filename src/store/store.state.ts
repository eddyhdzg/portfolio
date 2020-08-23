export interface State {
  themeType: "dark" | "light";
  loadingTheme: boolean;
}

export const initialState: State = {
  themeType: "dark",
  loadingTheme: true,
};
