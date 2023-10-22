// Problem 5
let weight = 63;
let height = 1.84;

const BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log(`${BMI} Underweight`);
} else if (BMI < 25) {
  console.log(`${BMI} Normal weight`);
} else if (BMI < 30) {
  console.log(`${BMI} Overweight class 1`);
} else if (BMI < 35) {
  console.log(`${BMI} Overweight class 2`);
} else {
  console.log(`${BMI} Overweight class 3`);
}