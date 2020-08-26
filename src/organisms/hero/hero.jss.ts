import { StyleSheet } from "react-native";

const heroStyles = StyleSheet.create({
  nameContainer: {
    marginTop: 48,
    marginBottom: 36,
  },
  bottomContainer: {
    flexDirection: "row",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  descriptionContainer: {
    flex: 2,
    // justifyContent: "center",
    alignItems: "center",
    padding: 8, //FIXME
    paddingLeft: 48,
  },
});

export default heroStyles;
