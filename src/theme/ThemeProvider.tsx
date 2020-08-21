import React, { useEffect } from "react";
import { useStore } from "store";
import shallow from "zustand/shallow";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider as Provider } from "@shopify/restyle";
import { AsyncStorage } from "react-native";

const ThemeProvider: React.FC = ({ children }) => {
  const { theme, dispatch } = useStore(
    (state) => ({ theme: state.theme, dispatch: state.dispatch }),
    shallow,
  );

  const save = async () => {
    try {
      if (theme) {
        await AsyncStorage.setItem("theme", theme);
      }
    } catch (e) {
      console.log(e);
      console.error("Failed to save theme.");
    }
  };

  const load = async () => {
    try {
      const theme = await AsyncStorage.getItem("theme");

      if (theme !== null) {
        if (theme === "dark") {
          dispatch({
            type:
              theme === "dark"
                ? "THEME_SET_DARK_THEME"
                : "THEME_SET_LIGHT_THEME",
          });
        }
      }
    } catch (e) {
      console.log(e);

      console.error("Failed to load theme.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    save();
  }, [theme]);

  return (
    <Provider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </Provider>
  );
};
export default ThemeProvider;
