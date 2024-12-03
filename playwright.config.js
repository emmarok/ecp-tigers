// const { defineConfig } = require('@playwright/test');

// module.exports = defineConfig({
//   // Set the test directory
//   testDir: './', // Replace this with your tests folder path if different

//   // Configure the projects to run tests in different browsers
//   projects: [
//     {
//       name: 'Chromium',
//       use: { 
//         browserName: 'chromium',
//         headless: false, // Run tests in headless mode
//         viewport: { width: 1280, height: 720 }, // Set viewport size
//       },
//     },
//     {
//       name: 'Firefox',
//       use: { 
//         browserName: 'firefox',
//         headless: false, // Run tests in headless mode
//         viewport: { width: 1280, height: 720 },
//       },
//     },
//     {
//       name: 'WebKit',
//       use: { 
//         browserName: 'webkit',
//         headless: false, // Run tests in headless mode
//         viewport: { width: 1280, height: 720 },
//       },
//     },
//   ],

//   // Timeout settings
//   timeout: 30000, // 30 seconds timeout for each test
//   expect: {
//     timeout: 5000, // Timeout for expect assertions
//   },

//   // Reporters - Choose how you want to display results
//   reporter: [['dot'], ['json', { outputFile: 'test-results.json' }]],

//   // Optional: Video and Screenshot configurations
//   use: {
//     screenshot: 'only-on-failure', // Take screenshots on failure
//     video: 'retain-on-failure', // Record video only on failure
//   },

//   // Custom test match (default is any .spec.js or .test.js file in the testDir)
//   testMatch: '**/*.spec.js',
// });

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Test directory where your tests are located
  testDir: './features', // Point to the 'features' folder

  // Use configuration for Playwright Browser options
  use: {
    headless: false,  // Run tests in headless mode
    screenshot: 'only-on-failure', // Take screenshots only on failure
    video: 'retain-on-failure', // Record videos only on failure
  },
});