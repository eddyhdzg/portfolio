import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme/Theme";
import Center from "../utils/components/Center";
import { useStore } from "../store";
import shallow from "zustand/shallow";

const styles = (theme: Theme) =>
  StyleSheet.create({
    LandingView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.background.default,
    },
    LaningText: {
      color: theme.palette.text.primary,
    },
  });

const Landing: React.FC = () => {
  const theme = useTheme<Theme>();
  const { count, dispatch } = useStore(
    (state) => ({ count: state.count, dispatch: state.dispatch }),
    shallow
  );

  return (
    <View style={styles(theme).LandingView}>
      <Center>
        <View>
          <Text style={styles(theme).LaningText}>{count}</Text>
        </View>
        <Button
          title="toggle theme"
          onPress={() => dispatch({ type: "THEME_TOGGLE_THEME" })}
        />
      </Center>
    </View>
  );
};

export default Landing;
