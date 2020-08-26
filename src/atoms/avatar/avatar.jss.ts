import { StyleSheet } from "react-native";

const SIZE = 60;

const avatarStyles = StyleSheet.create({
  avatar: {
    height: SIZE * 2,
    width: SIZE * 2,
    backgroundColor: "white",
    borderRadius: SIZE,
    borderColor: "black",
    borderWidth: 2,
    marginTop: -SIZE,
  },
});

export default avatarStyles;
