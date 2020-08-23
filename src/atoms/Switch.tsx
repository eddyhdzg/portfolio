import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  LayoutChangeEvent,
} from "react-native";
import { animated, useSpring } from "react-spring/native";
import { Feather } from "@expo/vector-icons";
import { useStore } from "store";
import shallow from "zustand/shallow";
import { useTheme } from "@shopify/restyle";
import { Theme } from "theme";

const AnimatedView = animated(View);
const BORDER_WIDTH = 1;
const SIZE = 20;
const PADDING = 4;

const Switch: React.FC = () => {
  const { themeType, dispatch } = useStore(
    ({ themeType, dispatch }) => ({
      themeType,
      dispatch,
    }),
    shallow,
  );

  const isDark = themeType === "dark";

  const [, setWidth] = useState(0);
  const theme = useTheme<Theme>();

  const ballStyles = {
    backgroundColor: theme.palette.switch.tertiary,
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    borderColor: theme.palette.switch.primary,
    borderWidth: BORDER_WIDTH * 2.5,
  };

  const [ballSpring, setBallSrping] = useSpring(() => ({
    translateX: isDark ? 0 : SIZE + PADDING,
    config: { tension: 1000, friction: 30 },
  }));

  const ballStyle = {
    ...ballStyles,
    transform: [{ translateX: ballSpring.translateX }],
  };

  function measureView(event: LayoutChangeEvent) {
    setWidth(event.nativeEvent.layout.width);
  }

  useEffect(() => {
    setBallSrping({
      translateX: isDark ? 0 : SIZE + PADDING,
    });
  }, [themeType]);

  const switchShadow = !isDark
    ? {
        shadowColor: theme.palette.common.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 5,
        shadowOpacity: 0.12,
      }
    : {};

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => dispatch({ type: "THEME_TOGGLE_THEME" })}
      >
        <View
          style={{
            borderWidth: BORDER_WIDTH,
            backgroundColor: theme.palette.switch.secondary,
            borderColor: theme.palette.switch.border,
            borderRadius: 100,
            width: SIZE * 2 + PADDING * 4,
            padding: PADDING,
            ...switchShadow,
          }}
          onLayout={(event) => measureView(event)}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: PADDING,
              right: 0,
              bottom: 0,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: SIZE * 2 + PADDING,
            }}
          >
            <Feather
              name="sun"
              size={SIZE - PADDING}
              color={theme.palette.switch.primary}
            />
            <Feather
              name="moon"
              size={SIZE - PADDING}
              color={theme.palette.switch.primary}
            />
          </View>
          <AnimatedView style={ballStyle} />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Switch;
