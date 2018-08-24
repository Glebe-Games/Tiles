module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "react/prefer-stateless-function": false,
        "react/forbid-prop-types": ['error', { forbid: ['any'] }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": false,
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": [2, 2],
        "consistent-return": 0,
        "max-len": 0,
        "react/sort-comp": false,
        "linebreak-style": 0,
    },
    "globals": {
        "document": true,
        "window": true,
        "fetch": true,
    },
    "env": {
        "jest": true,
    },
}