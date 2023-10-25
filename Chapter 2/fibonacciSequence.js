// Problem 10
function fibonacci(n) {
  const seq = [0, 1];

  for(let i = 2; i < n; i++){
    const newSeq = seq[i-1] + seq[i-2];
    seq.push(newSeq);
  }

  return seq
}

console.log(fibonacci(5));