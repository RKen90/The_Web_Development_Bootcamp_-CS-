// 0 - 5 == Free
// 5 - 10 == £10
// 10 - 65 == £20
// 65+ == free

const age = -100;
if ((age >= 0 && age < 5) || age >= 65) {
  console.log("Free");
} else if (age >= 5 && age < 10) {
  console.log("£10");
} else if (age >= 10 && age < 65) {
  console.log("£20");
} else {
  console.log("You do not exist, go away");
}
