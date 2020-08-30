import React from "react";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Box, Spinner } from "../atoms";

const FontProvider: React.FC = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <Box flex={1} justifyContent="center">
        <Spinner />
      </Box>
    );
  }

  return <>{children}</>;
};

export default FontProvider;
