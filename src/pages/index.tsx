import React from "react";
import ThemeProvider from "../theme/Theme";
import { Landing } from "../templates";

export default function App() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
}
