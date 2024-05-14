function getRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();

  // Scale the random decimal to the desired range
  const randomNumber = randomDecimal * (max - min + 1) + min;

  // Return the result, making sure to floor the value to an integer
  return Math.floor(randomNumber);
}

// Example usage:
const min = 1;
const max = 65;
const randomNum = getRandomNumber(min, max);
console.log(randomNum); // This will output a random number between 1 and 100 (inclusive)
