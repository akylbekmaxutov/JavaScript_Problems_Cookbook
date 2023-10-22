// Problem 10
let word = 'noone';
let wordReversed = word.split('').reverse().join('')

if (word === wordReversed) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} is not palindrome`);
}