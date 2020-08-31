import React from "react";
import { Box, RestyleText } from "atoms";
import { useStore } from "store";
import shallow from "zustand/shallow";

const Footer: React.FC = () => {
  const { themeType } = useStore(
    ({ themeType }) => ({
      themeType,
    }),
    shallow,
  );

  return (
    <Box alignItems="center" marginTop="7xl" paddingBottom="base">
      <RestyleText variant="regular">
        {`Made with ${themeType === "light" ? "💛" : "💙"} in React-Native-Web`}
      </RestyleText>
    </Box>
  );
};

export default Footer;
