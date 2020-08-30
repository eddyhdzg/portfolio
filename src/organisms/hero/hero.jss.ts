import { StyleSheet } from "react-native";
import { theme } from "theme";

const heroStyles = StyleSheet.create({
  nameContainer: {
    marginTop: theme.spacing["5xl"],
    marginBottom: theme.spacing["7xl"],
  },

  titleContainer: {
    justifyContent: "center",
  },
  descriptionContainer: {
    alignItems: "center",
    paddingVertical: theme.spacing["md"],
  },
});

export default heroStyles;
