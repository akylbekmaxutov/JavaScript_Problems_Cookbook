// Problem 4
let year = 2022;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap year.");
    } else {
      console.log("Not leap year.");
    }
  } else {
    console.log("Leap year.");
  }
} else {
  console.log("Not leap year.");
}