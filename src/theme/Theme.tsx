import { createTheme } from "@shopify/restyle";
import tokens from "./tokens";

export const darkTheme = createTheme({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920,
  },
  colors: {
    black: tokens.colors.common.black,
    white: tokens.colors.common.white,
    transparent: tokens.colors.common.transparent,
    primaryText: tokens.colors.whites[300],
    secondaryText: tokens.colors.whites[200],
    divider: tokens.colors.whites[100],
    violet100: tokens.colors.violet[100],
    violet200: tokens.colors.violet[200],
    blue100: tokens.colors.blues[100],
  },
  palette: {
    background: {
      default: tokens.colors.blacks[500],
    },
    switch: {
      primary: tokens.colors.common.white,
      secondary: tokens.colors.blacks[400],
      tertiary: tokens.colors.blacks[300],
      border: tokens.colors.blacks[300],
    },
  },
  spacing: {
    0: tokens.units[0],
    xs: tokens.units["xs"],
    sm: tokens.units["sm"],
    md: tokens.units["md"],
    base: tokens.units["base"],
    xl: tokens.units["xl"],
    "2xl": tokens.units["2xl"],
    "3xl": tokens.units["3xl"],
    "4xl": tokens.units["4xl"],
    "5xl": tokens.units["5xl"],
    "6xl": tokens.units["6xl"],
    "7xl": tokens.units["7xl"],
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily:
      '"Inter_400Regular", "Roboto", "-apple-system", "Helvetica", "Arial", sans-serif',
  },
  cardVariants: {
    bordered: {
      borderWidth: 1,
      borderColor: "divider",
      borderRadius: 3,
      paddingHorizontal: "base",
      paddingVertical: "md",
    },
    borderless: {
      borderWidth: 1,
      borderColor: "transparent",
      borderRadius: 3,
      paddingVertical: "md",
    },
    subtitle: {
      borderBottomWidth: 1,
      borderColor: "divider",
      paddingBottom: "sm",
      marginBottom: "3xl",
    },
  },

  textVariants: {
    header: {
      color: "primaryText",
      fontFamily: "Inter_700Bold",
      fontWeight: "bold",
      fontSize: {
        xs: tokens.units["3xl"],
        sm: tokens.units["4xl"],
      },
      lineHeight: {
        xs: tokens.units["4xl"],
        sm: tokens.units["5xl"],
      },
    },
    subHeader: {
      color: "primaryText",
      fontFamily: "Inter_600SemiBold",
      fontWeight: "semibold",
      fontSize: 19,
      lineHeight: 28,
    },
    bold: {
      color: "primaryText",
      fontFamily: "Inter_700Bold",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: 24,
    },
    regular: {
      color: "primaryText",
      fontFamily: "Inter_400Regular",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 24,
    },
    secondary: {
      color: "secondaryText",
      fontFamily: "Inter_400Regular",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 24,
    },
    tag: {
      color: "blue100",
      fontFamily: "Inter_600SemiBold",
      fontWeight: "bold",
      fontSize: 17,
      paddingVertical: "xs",
      paddingHorizontal: "sm",
      backgroundColor: "divider",
      borderRadius: 3,
      marginLeft: "sm",
      textTransform: "uppercase",
    },
  },
});

export const lightTheme: typeof darkTheme = {
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    background: {
      ...darkTheme.palette.background,
      default: tokens.colors.common.white,
    },
    switch: {
      ...darkTheme.palette.switch,
      primary: tokens.colors.yellow[100],
      secondary: tokens.colors.common.white,
      tertiary: tokens.colors.yellow[200],
      border: tokens.colors.blacks[100],
    },
  },
  colors: {
    ...darkTheme.colors,
    primaryText: tokens.colors.greys[200],
    divider: tokens.colors.blacks[100],
  },
};

export type DarkTheme = typeof darkTheme;
