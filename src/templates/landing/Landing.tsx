import React from "react";
import { View } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "theme";
import { Navbar } from "organisms";
import landingStyles from "./landing.jss";

const Landing: React.FC = () => {
  const theme = useTheme<Theme>();
  const styles = landingStyles(theme);

  return (
    <View style={styles.themeView}>
      <View style={styles.container}>
        <Navbar />
      </View>
    </View>
  );
};

export default Landing;
