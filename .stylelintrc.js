module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
  processors: ["stylelint-processor-styled-components"],
  plugins: ["stylelint-prettier"],
  rules: {
    "no-empty-source": null,
    "alpha-value-notation": null,
    "color-function-notation": null,
  },
};
