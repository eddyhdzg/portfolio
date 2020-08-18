import React from "react";
import { useStore } from "store";
import shallow from "zustand/shallow";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider as Provider } from "@shopify/restyle";

const ThemeProvider: React.FC = ({ children }) => {
  const { theme } = useStore((state) => ({ theme: state.theme }), shallow);

  return (
    <Provider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </Provider>
  );
};
export default ThemeProvider;
