module.exports = {
    extends: [
        "@commitlint/config-conventional",
        "@commitlint/config-lerna-scopes",
    ],
    rules: {
        "scope-empty": [2, "never"],
        "scope-enum": [0, "always"],
    },
};
