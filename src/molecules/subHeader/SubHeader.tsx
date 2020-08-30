import React from "react";
import { Card, RestyleText } from "atoms";

interface ISubHeaderProps {
  emoji: string;
}

const SubHeader: React.FC<ISubHeaderProps> = ({ children, emoji }) => {
  return (
    <Card variant="subtitle" flexDirection="row" alignItems="center">
      <RestyleText variant="subHeader">{emoji}</RestyleText>
      <RestyleText variant="tag">{children}</RestyleText>
    </Card>
  );
};

export default SubHeader;
