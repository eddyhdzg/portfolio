import { createTheme } from "@shopify/restyle";

export const colors = {
  black: "#000",
  white: "#fff",
  greys: {
    chip: "rgba(135,131,120,0.15)",
    paper: "rgb(63, 68, 71)",
    default: "#252A35",
    grey1: "#303947",
    grey2: "#3F495A",
    divider: "rgba(255, 255, 255, 0.07)",
    primary: "rgba(255, 255, 255, 0.90)",
    secondary: "rgba(255, 255, 255, 0.60)",
    border: "#E0E3E9",
  },
  yellow: {
    primary: "#E9A242",
    secondary: "#FFE9C8",
  },
  blacks: {
    primary: "#37352f",
    secondary: "#9b9a97",
  },
  blues: {
    primary: "rgb(82,156,202)",
  },
  muigreys: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
};

export const darkTheme = createTheme({
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  colors: {
    primaryText: colors.white,
  },
  palette: {
    background: {
      chip: colors.greys.chip,
      paper: colors.greys.paper,
      default: colors.greys.default,
      grey1: colors.greys.grey1,
      grey2: colors.greys.grey2,
    },
    common: {
      black: colors.black,
      white: colors.white,
    },
    divider: colors.greys.divider,
    greys: colors.muigreys,
    primary: {
      main: colors.blues.primary,
    },
    text: {
      primary: colors.greys.primary,
      secondary: colors.greys.secondary,
    },
    switch: {
      primary: colors.white,
      secondary: colors.greys.grey1,
      tertiary: colors.greys.grey2,
      border: colors.greys.grey2,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    base: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 40,
    "5xl": 52,
    "6xl": 64,
  },

  shadows: {},
  shape: {
    borderRadius: 4,
  },
  transitions: {},
  typography: {
    fontFamily:
      '"Inter_400Regular", "Roboto", "-apple-system", "Helvetica", "Arial", sans-serif',
  },
  textVariants: {
    h1: {
      fontFamily: "Inter_700Bold",
      fontWeight: "bold",
      fontSize: 40,
      lineHeight: 48,
      color: "primaryText",
    },
    bold: {
      fontFamily: "Inter_600SemiBold",
      fontWeight: "semibold",
      fontSize: 16,
      lineHeight: 24,
      color: "primaryText",
    },
    regular: {
      fontFamily: "Inter_400Regular",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 24,
      color: "primaryText",
    },
  },
  zIndex: {},
});

export const lightTheme: typeof darkTheme = {
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    background: {
      ...darkTheme.palette.background,
      default: colors.white,
    },
    text: {
      primary: colors.blacks.primary,
      secondary: colors.blacks.secondary,
    },
    switch: {
      ...darkTheme.palette.switch,
      primary: colors.yellow.primary,
      secondary: colors.white,
      tertiary: colors.yellow.secondary,
      border: colors.greys.border,
    },
  },
  typography: {
    ...darkTheme.typography,
  },
  colors: {
    ...darkTheme.colors,
    primaryText: colors.black,
  },
};

export type DarkTheme = typeof darkTheme;
