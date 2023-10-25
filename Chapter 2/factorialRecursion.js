// Problem 6
function factorialRecursion(n) {
  if (n === 0) {
    return 1;
  }
  return factorialRecursion(n - 1) * n;
}

console.log(factorialRecursion(5));