/* Else IF Statements */

const dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
  console.log("I hate mondays!");
} else if (dayOfWeek === "Saturday") {
  console.log("Yay I love Saturdays");
} else if (dayOfWeek === "Friday") {
  console.log("TGIF");
}

/*
0-5 = Free
5-10 = Child $10
10-65 = Adult $20
65+ Senior $10
*/

let age = 65;
let superChild = 0;
let child = 10;
let adult = 20;
let senior = 10;

if (age <= 5) {
  console.log(`You are ${age} years old. Please pay $${superChild}`);
} else if (age <= 10) {
  console.log(`You are ${age} years old. Please pay $${child}`);
} else if (age <= 64) {
  console.log(`You are ${age} years old. Please pay $${adult}`);
} else if (age >= 65) {
  console.log(`You are ${age} years old. Please pay $${senior}`);
}
