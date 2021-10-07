// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("@commitlint/config-conventional");
const types = config.rules["type-enum"][2];

config.rules["type-enum"][2] = ["story"].concat(types);

module.exports = {
  extends: ["@commitlint/config-conventional"],
};
