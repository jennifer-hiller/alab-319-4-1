// 1. Matrix Diagonal Difference
// Problem: Write a function diagonalDifference(matrix) that calculates the difference between the sums of the diagonals in a square matrix (2D array).
// Example:
function diagonalDifference(arr) {
  const arrLength = arr.length;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i < arrLength; i++) {
    sum1 += arr[i - 1][i - 1];
    sum2 += arr[i - 1][arrLength - i];
  }
  return Math.abs(sum1 - sum2);
}
diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// Left diagonal: 1 + 5 + 9 = 15
// Right diagonal: 3 + 5 + 7 = 15
// Output: 0

// 2. Vowel and Consonant Counter
// Problem: Write a function countVowelsAndConsonants(str) that takes a string and returns an object with the count of vowels and consonants. Ignore numbers, spaces, and special characters.
// Example:
function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    } else if (consonants.includes(str[i])) {
      consonantCount++;
    }
  }
  return { vowels: vowelCount, consonants: consonantCount };
}
countVowelsAndConsonants("Hello World!");

// Mumbling Pattern
// Problem: Write a function that takes a string and returns a new string with each character repeated based on its position in the string.
// Example:
function mumblingPattern(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      result += str[i].toLowerCase();
    }
    if (i < str.length - 1) {
      result += "-";
    }
  }
  return result;
}
console.log(mumblingPattern("abcd"));
