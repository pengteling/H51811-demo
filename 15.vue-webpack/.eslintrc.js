module.exports = {
    "extends": [
      "airbnb-base",
      "plugin:vue/recommended"
    ],
    "plugins":[
      "vue"
    ],
    "env":{
      "browser":true
    },
    "parserOptions":{
      "parser": "babel-eslint",
      "ecmaVersion":6,
      "sourceType":"module",
      "ecmaFeatures":{
        "jsx":true
      }
    },
    "rules":{
      "semi": 0,
      "vue/require-prop-types":"off",
      "linebreak-style":0,
      "no-console":0,
      "import/no-unresolved":0,
      "import/extensions":0
    }
};
