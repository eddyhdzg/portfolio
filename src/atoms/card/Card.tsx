import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "theme";
import { Box } from "atoms";

const Card = createRestyleComponent<
  VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>
>([createVariant({ themeKey: "cardVariants" })], Box);

export default Card;
