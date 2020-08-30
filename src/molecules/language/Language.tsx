import React from "react";
import { Card, RestyleText, Box } from "atoms";

interface ILanguageProps {
  language: string;
  level: string;
  isLast: boolean;
}

const Language: React.FC<ILanguageProps> = ({ language, level, isLast }) => {
  return (
    <Card marginBottom={isLast ? "sm" : 0}>
      <Box flexDirection="row" flexWrap="wrap" marginBottom="sm">
        <RestyleText variant="bold" marginRight="sm">
          {language}:
        </RestyleText>
        <RestyleText variant="regular">{level}</RestyleText>
      </Box>
    </Card>
  );
};

export default Language;
