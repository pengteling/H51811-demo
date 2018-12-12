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
      "ecmaVersion":6,
      "sourceType":"module",
      "ecmaFeatures":{
        "jsx":true
      }
    },
    "rules":{
      "semi": 0,
      "vue/require-prop-types":"off"
    }
};
