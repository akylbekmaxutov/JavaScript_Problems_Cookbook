// Problem 9
let fruitName = 'lemon';
switch (fruitName.toLowerCase()) {
  case "apple":
  case "banana":
  case "cherry":
  case "grape":
  case "kiwi":
    console.log("It's a common fruit.");
    break;
  case "orange":
  case "lemon":
  case "lime":
    console.log("It's a citrus fruit.");
    break;
  case "strawberry":
  case "blueberry":
  case "raspberry":
  case "blackberry":
    console.log("It's a berry.");
    break;
  case "pineapple":
  case "mango":
  case "papaya":
  case "coconut":
    console.log("It's a tropical fruit.");
    break;
  default:
    console.log("I'm not sure about this fruit.");
    break;
}
