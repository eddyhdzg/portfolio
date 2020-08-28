import React from "react";
import { Avatar, RestyleText, Box } from "atoms";
import { View } from "react-native";
import copies from "copywriting";
import heroStyles from "./hero.jss";
import { BorderView } from "../../molecules";

const Hero: React.FC = () => {
  const { name, title, description } = copies.landing.hero;

  return (
    <>
      <Avatar />
      <View style={heroStyles.nameContainer}>
        <RestyleText variant="header">{name}</RestyleText>
      </View>
      <Box
        flexDirection={{
          md: "row",
        }}
      >
        <Box
          flex={{
            md: 1,
          }}
          marginBottom={{
            xs: "2xl",
            md: 0,
          }}
        >
          <BorderView
            cardVariant="bordered"
            textVariant="regular"
            justifyContent="center"
          >
            {title}
          </BorderView>
        </Box>
        <Box
          flex={{ md: 2 }}
          marginLeft={{
            md: "5xl",
          }}
        >
          <BorderView
            cardVariant="borderless"
            textVariant="bold"
            justifyContent="center"
          >
            {description}
          </BorderView>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
