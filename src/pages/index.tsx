import React from "react";
import { ThemeProvider, FontProvider } from "theme";
import { Landing } from "templates";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <FontProvider>
        <Landing />
      </FontProvider>
    </ThemeProvider>
  );
};
export default App;
