/* Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}

const age = calcAge1(1991);

// Function expression 
const cal2 = function (birthYeah) {
  return 2037 - birthYeah;
};

const age2 = cal2(1991);

console.log(age, age2);
*/

/*Arrow function
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);
*/
/*
const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "jack"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} apples and ${orangesPieces} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

/*
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = (avgDolphin, avgKoalas) => {
  if (avgDolphin / avgKoalas > 2) {
    return `Team Dolphin win (${avgDolphin} vs ${avgKoalas})`;
  } else if (avgKoalas / avgDolphin >= 2) {
    return `Team Koalas win! ${avgKoalas} vs ${avgDolphin}`;
  } else {
    return "no team wins";
  }
};

console.log(checkWinner(50, 80));
*/
/*
const friend1 = "Michael";
const friend2 = "scott";
const friend3 = "james";

const array = ["james", "john", "scott"];

console.log(array);

const num = new Array(11, 22, 33, 44, 55);

console.log(array[0]);
console.log(array[2]);

console.log(array.length);
console.log(array[array.length - 1]);

array[2] = "Jay";
console.log(array);

const firstName = "Jack";
const jack = ["Jack", "Le", 2024 - 2002, "Student"];
console.log(jack);
*/

/* Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];
const ages = [];

for (let index = 0; index < years.length; index++) {
  const age = calcAge(years[index]); 
  ages[index] = age;
}
console.log(ages);
*/

//40. Basic Array Operations (Methods)
/*
const friends = ["Michael", "Steven", "Peter"];
// Add Elements
const newLength = friends.push("Jay"); // add to the back
console.log(friends);
console.log(newLength);

friends.unshift("John"); //Add to front
console.log(friends);

// Remove elements

friends.pop(); //  remove last
console.log(friends);

friends.shift(); // remove first
console.log(friends);

console.log(friends.indexOf("Peter"));
friends.push("23");
console.log(friends.includes("Steven"));
console.log(friends.includes("John"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  console.log("You have a friend name Peter");
}*/

//Coding Challenge
// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.
/*
const bills = [125, 555, 44];
const tips = [];

function calcTip(bills, tips) {
  const total = [];
  for (i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips[i] = bills[i] * 0.15;
    } else {
      tips[i] = bills[i] * 0.2;
    }
    total[i] = tips[i] + bills[i];
  }
  return console.log(bills, tips, total);
}

calcTip(bills, tips);
*/

// 42. Introduction to Objects
/*
const jonasArray = [
  "jack",
  "Le",
  2024 - 2002,
  "Student",
  ["Michael", "John", "Steven"],
];
*/
// // 43. Dot vs. Bracket Notation
// const jack = {
//   firstName: "Jack",
//   lastName: "Le",
//   job: "Student",
//   age: 2024 - 2002,
//   friend: ["Michael", "John", "Steven"],
// };

// //console.log(jack.friend);

// const nameKey = "Name";
// console.log(jack["first" + nameKey]);
// console.log(jack["last" + nameKey]);

// // const interestIn = prompt(
// //   "What do you want to know about jack? choose between firstname, lastname, age, job, and friends"
// // );

// // if (jack[interestIn]) {
// //   console.log(jack[interestIn]);
// // } else {
// //   console.log("Wrong request");
// // }

// jack.location = "Viet Nam";
// jack["Facebook"] = "@HuyLe";
// //console.log(jack);

// // Challenge

// console.log(
//   `${jack.firstName} has ${jack.friend.length} friends, and his best friend is called ${jack.friend[0]}`
// );

//44. Object Methods

// const jack = {
//   firstName: "Jack",
//   lastName: "Le",
//   job: "Student",
//   age: 2002,
//   friend: ["Michael", "John", "Steven"],
//   hasDriverLicense: false,

//   calcAge: function () {
//     return 2024 - this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge(this.age)} years old ${
//       this.job
//     }, and he has ${this.hasDriverLicense ? "a" : "not"} driver license.`;
//   },
// };

// console.log(jack.calcAge());
// // challenge
// console.log(jack.getSummary());
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// // Calculate BMI for both Mark and John
// mark.calcBMI();
// john.calcBMI();

// console.log(
//   `${
//     mark.bmi > john.bmi
//       ? mark.fullName + "'s BMI (" + mark.calcBMI() + ")"
//       : john.fullName + "'s BMI (" + john.calcBMI() + ")"
//   } is higher than ${
//     mark.bmi > john.bmi
//       ? john.fullName + "'s BMI (" + john.calcBMI() + ")!"
//       : mark.fullName + "'s BMI (" + mark.calcBMI() + ")!"
//   }`
//);

const jack = [
  "jack",
  "le",
  2024 - 2002,
  "student",
  ["kay", "trinh", "dat"],
  true,
];
const types = [];

for (let index = 0; index < jack.length; index++) {
  console.log(jack[index], typeof jack[index]);
  types[index] = typeof jack[index];
}
console.log(types);

// calc age

const years = [1991, 2007, 1968, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log(ages);

console.log("only string");

for (let i = 0; i < jack.length; i++) {
  if (typeof jack[i] !== "string") continue;
  console.log(jack[i], typeof jack[i]);
}
