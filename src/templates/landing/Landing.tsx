import React from "react";
import { View } from "react-native";
import { Cover } from "atoms";
import { Navbar, Hero, Abilities } from "organisms";
import landingStyles from "./landing.jss";
import { useTheme } from "@shopify/restyle";

const Landing: React.FC = () => {
  const theme = useTheme();
  const styles = landingStyles(theme);
  return (
    <View style={styles.themeView}>
      <View style={styles.container}>
        <Navbar />
      </View>
      <Cover />
      <View style={styles.container}>
        <Hero />
      </View>
      <View style={styles.container}>
        <View style={styles.topSpacing}>
          <Abilities />
        </View>
      </View>
    </View>
  );
};

export default Landing;
