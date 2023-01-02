import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  const discovery = data.asteroids
    .map(asteroid => asteroid.discoveryYear)
    .reduce((acc, year) => { acc[year] = (acc[year] || 0) + 1; return acc; }, {});

  return Object.keys(discovery).reduce((acc, year) => {
    if (discovery[year] > discovery[acc]) { return year; }
    return acc;
  });
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
