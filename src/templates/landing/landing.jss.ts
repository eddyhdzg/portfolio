import { StyleSheet } from "react-native";
import { Theme } from "theme";

const landingStyles = (theme: Theme) =>
  StyleSheet.create({
    themeView: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
      alignItems: "stretch",
    },
    container: {
      marginHorizontal: "auto",
      width: "90%",
      maxWidth: 1440,
    },
    topSpacing: {
      marginTop: theme.spacing["7xl"],
    },
  });

export default landingStyles;
