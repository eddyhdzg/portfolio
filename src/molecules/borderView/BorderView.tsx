import React from "react";
import { Card, RestyleText } from "atoms";

interface IBorderViewProps {
  cardVariant: "bordered" | "borderless";
  justifyContent?: "center";
  textVariant: "regular" | "bold";
}

const BorderView: React.FC<IBorderViewProps> = ({
  children,
  cardVariant,
  justifyContent,
  textVariant,
}) => {
  return (
    <Card variant={cardVariant} justifyContent={justifyContent} flex={1}>
      <RestyleText variant={textVariant}>{children}</RestyleText>
    </Card>
  );
};

export default BorderView;
