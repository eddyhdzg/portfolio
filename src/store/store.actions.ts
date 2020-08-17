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

export type Actions =
  | CountSetCount
  | CountIncreaseCount
  | CountDecreaseCount
  | ThemeToggleTheme;
