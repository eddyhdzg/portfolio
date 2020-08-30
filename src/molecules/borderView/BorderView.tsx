import React from "react";
import { Card, RestyleText, Box } from "atoms";
import { VariantProps } from "@shopify/restyle";
import { Theme } from "theme";

interface IBorderViewProps {
  cardVariant: "bordered" | "borderless";
  justifyContent?: "center";
  textVariant: "regular" | "subHeader";
}

const BorderView: React.FC<
  IBorderViewProps &
    VariantProps<Theme, "cardVariants"> &
    React.ComponentProps<typeof Box>
> = ({ children, cardVariant, justifyContent, textVariant, ...rest }) => {
  return (
    <Card variant={cardVariant} justifyContent={justifyContent} {...rest}>
      <RestyleText variant={textVariant}>{children}</RestyleText>
    </Card>
  );
};

export default BorderView;
