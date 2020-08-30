import React from "react";
import { Card, RestyleText, Box } from "atoms";

interface IExperienceProps {
  company: string;
  date: string;
  description: string;
  location: string;
  position: string;
  isLast: boolean;
}

const Experience: React.FC<IExperienceProps> = ({
  company,
  date,
  description,
  location,
  position,
  isLast,
}) => {
  return (
    <Card marginBottom={isLast ? "7xl" : 0}>
      <Box flexDirection="row" flexWrap="wrap" marginBottom="sm">
        <RestyleText variant="bold">{company}</RestyleText>
        <RestyleText variant="bold" marginHorizontal="sm">
          •
        </RestyleText>
        <RestyleText variant="regular">{location}</RestyleText>
      </Box>
      <RestyleText variant="secondary" marginBottom="sm">
        {position}
      </RestyleText>
      <RestyleText variant="secondary" marginBottom="sm">
        {date}
      </RestyleText>
      <RestyleText variant="regular">{description}</RestyleText>
    </Card>
  );
};

export default Experience;
