export interface CountSetCount {
  type: "COUNT_SET_COUNT";
  count: number;
}

export interface CountIncreaseCount {
  type: "COUNT_INCREASE_COUNT";
}

export interface CountDecreaseCount {
  type: "COUNT_DECREASE_COUNT";
}

export interface ThemeToggleTheme {
  type: "THEME_TOGGLE_THEME";
}

export interface ThemeSetLightTheme {
  type: "THEME_SET_LIGHT_THEME";
}
export interface ThemeSetDarkTheme {
  type: "THEME_SET_DARK_THEME";
}

export type Actions =
  | CountSetCount
  | CountIncreaseCount
  | CountDecreaseCount
  | ThemeToggleTheme
  | ThemeSetLightTheme
  | ThemeSetDarkTheme;
