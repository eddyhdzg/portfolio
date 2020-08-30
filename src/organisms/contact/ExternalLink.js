import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

export default class ExternalLink extends Component {
  render() {
    const { children, onPress } = this.props;

    return (
      <TouchableOpacity
        accessibilityRole="link"
        targ
        style={{ flexDirection: "row" }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
}
