// Problem 9

const arrayManipulation = (arr, n) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== n) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(arrayManipulation([1,1,2,3,4,1,5,6,1,7], 1));