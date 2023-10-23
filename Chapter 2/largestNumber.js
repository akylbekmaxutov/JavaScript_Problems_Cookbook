// Problem 3
const largestNumber = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNumber([1, 2, 3, 4, 10, 9, 8, 7, 5, 6]));