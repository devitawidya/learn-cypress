const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
    env: {
      staging_url: 'https://staging-katalon-demo-cura.herokuapp.com/',
      prod_url: 'https://katalon-demo-cura.herokuapp.com/'
      //username_staging, username_prod, bisa di global env
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5000 //dari cypress defaultnya 4000
  },
});
