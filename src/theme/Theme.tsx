import { createTheme, ThemeProvider as Provider } from "@shopify/restyle";
import { useStore } from "../store";
import shallow from "zustand/shallow";

const colors = {
  black: "#000",
  white: "#fff",
  gerys: {
    chip: "rgba(135,131,120,0.15)",
    paper: "rgb(63, 68, 71)",
    default: "rgb(47, 52, 55)",
    divider: "rgba(255, 255, 255, 0.07)",
    greyPrimary: "rgba(0, 0, 0, 0.90)",
    grepySecondary: "rgba(0, 0, 0, 0.60)",
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
  colors: {},
  palette: {
    background: {
      chip: colors.gerys.chip,
      paper: colors.gerys.paper,
      default: colors.gerys.default,
    },
    common: {
      black: colors.black,
      white: colors.white,
    },
    divider: colors.gerys.divider,
    greys: colors.muigreys,
    primary: {
      main: colors.blues.primary,
    },
    text: {
      primary: colors.gerys.greyPrimary,
      secondary: colors.gerys.grepySecondary,
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
      '"Inter", "Roboto", "-apple-system", "Helvetica", "Arial", sans-serif',
  },
  zIndex: {},
});

export const lightTheme = {
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    background: {
      ...darkTheme.palette.background,
      default: colors.white,
    },
  },
};

export type Theme = typeof darkTheme;

const ThemeProvider: React.FC = ({ children }) => {
  const { theme } = useStore((state) => ({ theme: state.theme }), shallow);

  return (
    <Provider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </Provider>
  );
};
export default ThemeProvider;
