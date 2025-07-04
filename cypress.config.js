const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.laboratoriodetesting.com',
    pageLoadTimeout: 60000, // espera hasta 60 segundos  
    setupNodeEvents(on, config) {
      // Aquí puedes añadir eventos si los necesitas
    },
  },
});
