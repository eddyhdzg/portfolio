import { StyleSheet } from "react-native";
import { Theme } from "theme";
import { AnimatedValue } from "react-spring/native";

type OverwriteKeys<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] };

export const BORDER_WIDTH = 1;
export const SIZE = 20;
export const PADDING = 4;

interface SwitchStyles {
  theme: Theme;
  isDark: boolean;
  ballSpring: AnimatedValue<
    Pick<
      OverwriteKeys<
        {
          translateX: number;
          config: {
            tension: number;
            friction: number;
          };
        },
        React.CSSProperties
      >,
      "translateX"
    >
  >;
}

const switchStyles = ({ theme, isDark, ballSpring }: SwitchStyles) =>
  StyleSheet.create({
    container: {
      borderWidth: BORDER_WIDTH,
      backgroundColor: theme.palette.switch.secondary,
      borderColor: theme.palette.switch.border,
      borderRadius: 100,
      width: SIZE * 2 + PADDING * 4,
      padding: PADDING,
      ...(!isDark && {
        shadowColor: theme.palette.common.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 5,
        shadowOpacity: 0.12,
      }),
    },
    icons: {
      position: "absolute",
      top: 0,
      left: PADDING,
      right: 0,
      bottom: 0,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      width: SIZE * 2 + PADDING,
    },
    ballStyles: {
      backgroundColor: theme.palette.switch.tertiary,
      height: SIZE,
      width: SIZE,
      borderRadius: SIZE / 2,
      borderColor: theme.palette.switch.primary,
      borderWidth: BORDER_WIDTH * 2.5,
      transform: [{ translateX: ballSpring.translateX }],
    },
  });

export default switchStyles;
