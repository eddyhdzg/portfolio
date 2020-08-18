import React from "react";
import { ThemeProvider } from "theme";
import { Landing } from "templates";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
};
export default App;
