import { StyleSheet } from "react-native";
import { theme } from "theme";

const navbarStyles = StyleSheet.create({
  navbar: {
    alignItems: "flex-end",
    marginVertical: theme.spacing.sm,
    userSelect: "none",
  },
});

export default navbarStyles;
