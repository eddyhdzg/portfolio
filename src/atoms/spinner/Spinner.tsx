import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "theme";

const Spinner = () => {
  const theme = useTheme<Theme>();
  return <ActivityIndicator size="large" color={theme.colors.blue100} />;
};

export default Spinner;
