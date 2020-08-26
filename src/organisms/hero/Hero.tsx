import React from "react";
import { Avatar } from "atoms";
import { View } from "react-native";
import { Theme } from "theme";
import { createText } from "@shopify/restyle";
import copies from "copywriting";
import { BorderView } from "molecules";
import heroStyles from "./hero.jss";

const Hero: React.FC = () => {
  const Text = createText<Theme>();

  const { name, title, description } = copies.landing.hero;

  return (
    <>
      <Avatar />
      <View style={heroStyles.nameContainer}>
        <Text variant="h1">{name}</Text>
      </View>
      <View style={heroStyles.bottomContainer}>
        <BorderView style={heroStyles.titleContainer}>
          <Text variant="bold">{title}</Text>
        </BorderView>
        <Text variant="regular" style={heroStyles.descriptionContainer}>
          {description}
        </Text>
      </View>
    </>
  );
};

export default Hero;
