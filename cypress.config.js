const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io",
    specPattern: "**/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
