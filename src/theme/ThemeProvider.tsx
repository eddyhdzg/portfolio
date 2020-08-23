import React, { useEffect } from "react";
import { useStore } from "store";
import shallow from "zustand/shallow";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider as Provider } from "@shopify/restyle";
import { AsyncStorage } from "react-native";

const ThemeProvider: React.FC = ({ children }) => {
  const { themeType, dispatch } = useStore(
    ({ themeType, dispatch }) => ({ themeType, dispatch }),
    shallow,
  );

  const load = async () => {
    try {
      await AsyncStorage.getItem("themeType").then((themeType) => {
        if (themeType !== null) {
          dispatch({
            type:
              themeType === "light"
                ? "THEME_SET_LIGHT_THEME"
                : "THEME_SET_DARK_THEME",
          });
        }
      });
    } catch (e) {
      console.log(e);
      console.error("Failed to load theme.");
    }
  };

  useEffect(() => {
    load().then(() => dispatch({ type: "LOADINGTHEME_SET_FALSE" }));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("themeType", themeType);
  }, [themeType]);

  return (
    <Provider theme={themeType === "light" ? lightTheme : darkTheme}>
      {children}
    </Provider>
  );
};
export default ThemeProvider;
