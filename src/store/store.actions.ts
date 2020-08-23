export interface ThemeToggleTheme {
  type: "THEME_TOGGLE_THEME";
}

export interface ThemeSetLightTheme {
  type: "THEME_SET_LIGHT_THEME";
}
export interface ThemeSetDarkTheme {
  type: "THEME_SET_DARK_THEME";
}

export interface LoadingThemeSetFalse {
  type: "LOADINGTHEME_SET_FALSE";
}

export type Actions =
  | ThemeToggleTheme
  | ThemeSetLightTheme
  | ThemeSetDarkTheme
  | LoadingThemeSetFalse;
