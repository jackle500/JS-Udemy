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

// Exercise
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
