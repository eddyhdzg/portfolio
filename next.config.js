const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");

module.exports = withExpo(
  withFonts({
    projectRoot: __dirname,
    distDir: "build",
  }),
);
