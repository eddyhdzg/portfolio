import React, { useEffect } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { animated, useSpring } from "react-spring/native";
import { useStore } from "store";
import shallow from "zustand/shallow";
import { useTheme } from "@shopify/restyle";
import { Theme } from "theme";
import switchStyles, { SIZE, PADDING } from "./switch.jss";
import { SunSVG, MoonSVG } from "assets/icons";

const AnimatedView = animated(View);

const Switch: React.FC = () => {
  const { themeType, dispatch } = useStore(
    ({ themeType, dispatch }) => ({
      themeType,
      dispatch,
    }),
    shallow,
  );

  const ICON_SIZE = SIZE - PADDING;

  const theme = useTheme<Theme>();
  const isDark = themeType === "dark";

  const [ballSpring, setBallSrping] = useSpring(() => ({
    translateX: isDark ? 0 : SIZE + PADDING,
    config: { tension: 1000, friction: 30 },
  }));

  useEffect(() => {
    setBallSrping({
      translateX: isDark ? 0 : SIZE + PADDING,
    });
  }, [themeType]);

  const styles = switchStyles({
    theme,
    isDark,
    ballSpring,
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => dispatch({ type: "THEME_TOGGLE_THEME" })}
    >
      <View style={styles.container}>
        <View style={styles.icons}>
          <SunSVG
            height={ICON_SIZE}
            width={ICON_SIZE}
            stroke={theme.palette.switch.primary}
          />
          <MoonSVG
            height={ICON_SIZE}
            width={ICON_SIZE}
            stroke={theme.palette.switch.primary}
          />
        </View>
        <AnimatedView style={styles.ballStyles} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
