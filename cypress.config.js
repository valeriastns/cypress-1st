const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com',
    setupNodeEvents(on, config) {
      if (config.env.ENV === 'staging') {
        config.baseUrl = 'https://sqlverifier-staging-08050d656f7a.herokuapp.com';
      }
      return config;
    },
  },
});