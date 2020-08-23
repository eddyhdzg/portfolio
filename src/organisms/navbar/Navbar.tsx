import React from "react";
import { View } from "react-native";
import { useStore } from "../../store";
import shallow from "zustand/shallow";
import { Switch } from "atoms";
import navbarStyles from "./navbar.jss";

const Navbar: React.FC = () => {
  const { loadingTheme } = useStore(
    ({ loadingTheme }) => ({
      loadingTheme,
    }),
    shallow,
  );
  return <View style={navbarStyles.navbar}>{!loadingTheme && <Switch />}</View>;
};

export default Navbar;
