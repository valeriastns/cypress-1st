const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: "czif38",
  e2e: {
    setupNodeEvents(on, config) {  // implement node event listeners here
    },
  },
});
