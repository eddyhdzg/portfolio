import React from "react";
import { Card, RestyleText, Box } from "atoms";

interface ISkillProps {
  subtitle: string;
  data: string[];
  isLast: boolean;
}

const Skill: React.FC<ISkillProps> = ({ subtitle, data, isLast }) => {
  return (
    <Card marginBottom={isLast ? "5xl" : 0}>
      <RestyleText variant="bold" marginBottom="xs">
        {subtitle}
      </RestyleText>
      <Box flexDirection="row" flexWrap="wrap" marginBottom="sm">
        {data.map((curr, index) => {
          return (
            <Box key={curr} flexDirection="row">
              <RestyleText variant="regular">{curr}</RestyleText>
              {index + 1 !== data.length && (
                <RestyleText variant="bold" marginHorizontal="sm">
                  •
                </RestyleText>
              )}
            </Box>
          );
        })}
      </Box>
    </Card>
  );
};

export default Skill;
