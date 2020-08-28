import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import coverStyles from "./cover.jss";
import { Theme } from "theme";
import { useTheme } from "@shopify/restyle";

const Cover: React.FC = () => {
  const theme = useTheme<Theme>();

  return (
    <LinearGradient
      colors={[theme.colors.violet100, theme.colors.violet200]}
      style={coverStyles.cover}
      end={[0.1, 0.2]}
    ></LinearGradient>
  );
};

export default Cover;
