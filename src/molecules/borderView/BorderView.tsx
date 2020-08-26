import React from "react";
import { View, StyleProp, TextStyle } from "react-native";
import borderStyles from "./borderView.jss";

interface IBorderView {
  style: StyleProp<TextStyle>;
}

const BorderView: React.FC<IBorderView> = ({ style, children }) => {
  return <View style={[borderStyles.border, style]}>{children}</View>;
};

export default BorderView;
