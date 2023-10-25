// Problem 8
const isPalindrome = (s) => {
  let r = s.split('').reverse().join('');
  return r === s;
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('raccoon'))