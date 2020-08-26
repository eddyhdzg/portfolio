import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import coverStyles from "./cover.jss";

const Cover: React.FC = () => {
  return (
    <LinearGradient
      colors={["#CE9FFC", "#7367F0"]}
      style={coverStyles.cover}
      end={[0.1, 0.2]}
    ></LinearGradient>
  );
};

export default Cover;
