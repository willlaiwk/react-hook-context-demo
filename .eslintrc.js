module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "jsx-a11y",
    "prettier"
  ],
  "rules": {
    "semi": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/label-has-associated-control": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 1,
    "class-methods-use-this": 0,
    "prettier/prettier": [
      "error", {
        "semi": false
      }
    ]
  }
}
