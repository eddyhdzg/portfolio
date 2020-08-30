import React from "react";
import { Card, RestyleText } from "atoms";

interface IEducationProps {
  university: string;
  major: string;
  date: string;
}

const Education: React.FC<IEducationProps> = ({ university, major, date }) => {
  return (
    <Card>
      <RestyleText variant="bold" marginBottom="sm">
        {major}
      </RestyleText>
      <RestyleText variant="regular" marginBottom="sm">
        {university}
      </RestyleText>
      <RestyleText variant="secondary" marginBottom="sm">
        {date}
      </RestyleText>
    </Card>
  );
};

export default Education;
