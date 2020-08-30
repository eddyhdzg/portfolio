import React from "react";
import { Image } from "react-native";
import avatarStyles from "./avatar.jss";

const Avatar: React.FC = () => {
  return (
    <Image
      source={require("../../assets/avatar.jpg")}
      style={avatarStyles.avatar}
    />
  );
};

export default Avatar;
