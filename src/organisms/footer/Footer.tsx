import React from "react";
import { Box, RestyleText } from "atoms";

const Footer: React.FC = () => {
  return (
    <Box alignItems="center" marginTop="7xl">
      <RestyleText variant="regular">
        Made with 💙 in React-Native-Web
      </RestyleText>
    </Box>
  );
};

export default Footer;