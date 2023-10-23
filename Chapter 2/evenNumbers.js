// Problem 5
const evenNumbers = (arr) => {
  newArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));