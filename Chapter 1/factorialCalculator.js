// Problem 7
function factorialCalculator(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialCalculator(n - 1);
  }
}

console.log(factorialCalculator(3));