import { StyleSheet } from "react-native";
import { Theme } from "theme";

const landingStyles = (theme: Theme) =>
  StyleSheet.create({
    themeView: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
    },
    container: {
      maxWidth: 1440,
    },
  });

export default landingStyles;
