const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  // Graba un video de cada prueba al ejecutar "npx cypress run" (lo usa GitHub Actions)
  video: true,
});
