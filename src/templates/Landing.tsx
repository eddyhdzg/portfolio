import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "theme";
import { Switch } from "atoms";
import { useStore } from "store";
import shallow from "zustand/shallow";

const styles = (theme: Theme) =>
  StyleSheet.create({
    LandingView: {
      flex: 1,
      backgroundColor: theme.palette.background.default,
    },
  });

const Landing: React.FC = () => {
  const theme = useTheme<Theme>();

  const { loadingTheme } = useStore(
    ({ loadingTheme }) => ({
      loadingTheme,
    }),
    shallow,
  );

  return (
    <View style={styles(theme).LandingView}>
      <View style={{ flexDirection: "row" }}>
        {!loadingTheme && <Switch />}
      </View>
    </View>
  );
};

export default Landing;
