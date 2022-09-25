const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  component: {
    excludeSpecPattern: "**/2-advanced-examples/*.js"
  },
  e2e: {
    baseUrl: "https://segurospiramide.com/login",
    excludeSpecPattern: ["**/2-advanced-examples/*.js", "**/1-getting-started/*.js"],    
  },
});
