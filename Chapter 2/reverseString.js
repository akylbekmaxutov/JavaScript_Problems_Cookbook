// Problem 2
const reverseString = (s) => {
  let r = '';
  for (let i = s.length - 1; i >= 0; i--){
    r += s[i];
  }
  return r;
}

console.log(reverseString('string'));