 let js = 'Abdullah';
console.log(2 + 2 + 2 + 2);

let death = "Abdullah is dead";
console.log(death);

let myFisrtJob = "Front-End Developer";
let mySecondJob = "Interni React Native";

let myCountryPopulation = "20moiilion";
let myCityPopulation = "1milion";
console.log(myCityPopulation, myCountryPopulation)

true;
console.log(typeof true);

let abdullahIsDeath = 'Yes';
console.log(typeof abdullahIsDeath);

let ageOfAbdullah = 19;
console.log(typeof ageOfAbdullah)

echo = My fisrt jo is 'myFisrtJob' and second job is 'mySecondJob' 


let abdullah = true;
console.log(typeof abdullah);

abdullah = "Dead";
console.log(typeof abdullah);

abdullah = 23 + 332;
console.log(typeof abdullah);


const ageAbdullah = 2023 - 2003;
const ageBeautyOnStreet = 2023 - 2000;
console.log(ageAbdullah, ageBeautyOnStreet);

let x = 10 + 5;
console.log(x);
x += 50;
console.log(x);



const heightMark = (1.69);
const weightMark = (78);

const heightJohn = (1.76);
const weightJohn = (92);


// Math operators
const now = 2023
const ageAbdullah = now - 2003;
const ageSheru = now - 2002;
console.log(ageAbdullah, ageSheru);
console.log(ageAbdullah * 2 / 9, ageSheru * 10 / 898, 6 ** 8);


// Assignment operators
const son = ("Abdullah");
const father = ("Arshad");
console.log(son + ' ' + father);
let x = (20 + 30);
x += 20;
x *= 2;
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageSheru > ageAbdullah);
console.log(ageSheru >= 20);

const trueAge = (ageSheru >= 20);
console.log(trueAge);

console.log(now - 2002 > now - 2003);


const now = 2023
const ageAbdullah = now - 2003;
const ageSheru = now - 2002;

console.log(now - 2002 > now - 2003);

let x, y;
x = y = 10 + 30 - 39;
const aveAge = (ageAbdullah + ageSheru) / 2
console.log(x, y, aveAge);


//BMI Test 1
const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const bmiMark = marksWeight / marksHeight ** 2;
const bmiJohn = johnWeight / johnHeight ** 2;

console.log(bmiMark);
console.log(bmiJohn);

const markHigherBMI = (bmiMark > bmiJohn);

console.log(markHigherBMI);

//BMI Test 2
const mark2Weight = 95;
const mark2Height = 1.88;

const john2Weight = 85;
const john2Height = 1.76;

const bmiNewMark = (mark2Weight / mark2Height ** 2);
const bmiNewJohn = (john2Weight / john2Height ** 2);

console.log(bmiNewMark, bmiNewJohn);

const bmiHigherNew = (bmiNewJohn > bmiNewMark);

console.log(bmiHigherNew);

//Strings
const myName = 'Abdullah';
const myBirth = '12 May';
const myContact = '03180115877';

console.log("My name is " + myName + " and my date of birth is " + myBirth + " and my contact number is " + myContact);

//Templates Literals
const myNameNew = 'Abdullah';
const myBirthNew = '12 May';
const myContactNew = '03180115877';

console.log(`My name is ${myNameNew} and my date of birth is ${myBirthNew} and my contact number is ${myContactNew}`);

const myDetails = `My name is ${myNameNew} and my date of birth is ${myBirthNew} and my contact number is ${myContactNew}`;
console.log(myDetails);

console.log(`This is the text with out variable, and it's possiable to write it through Templates Literals`);


//Ifelse Statments

const age = 14;
const limitedAge = age >= 18;

if (limitedAge) {
    console.log(`Abdullah can have gun now 🧨`);
} else {
    const leftAge = (18 - age);
    console.log(`Abdullah can have a gun after ${leftAge} years.`);
}


const abdullahWeight = 105;
const abdullahHeight = 1.9;

const aliWeight = 95;
const aliHeight = 1.9;

const abdullahResult = (abdullahWeight / abdullahHeight ** 2);
const aliResult = (aliWeight / aliHeight ** 2);

if (abdullahResult >= aliResult) {
    console.log(`Abdullah has ${abdullahResult} and Ali has ${aliResult}`);
} else {
    console.log(`Ali has ${aliResult} and Abdullah has ${abdullahResult}`);
}

//Type Conversion
const year = ('2023');
console.log(Number(year) + 2);
console.log(year + 18);
console.log(Number('xd') + 10);


//Type Coercion
console.log('Hi I am Abdullah ' + 19 + ' Old boy');
console.log(`Hi I am Abdullah a 19 Year old Man`);
console.log('20' + '20' + '10');
console.log('53' - '40' - '3');
console.log('10' * '50');
console.log('10' / '2');

let a = '1' + 4;
console.log(a - 4);

//Truthy and Falsy Values
//5 falsy values, 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('String'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log(`There is money.`);
} else {
    console.log(`There is no money.`);
}

let xd;
if (xd) {
    console.log(`This is DEFINED`);
} else {
    console.log('This is NOT-DEFINED');
}

let xd1 = '';
if (xd1) {
    console.log(`This is DEFINED`);
} else {
    console.log('This is NOT-DEFINED');
}

let xd2 = '1856';
if (xd2) {
    console.log(`This is DEFINED`);
} else {
    console.log('This is NOT-DEFINED');
}

//Equality Operators
let ageAbdullah = 16;

if (ageAbdullah >= 18) {
    console.log(`Abdullah is Adult`);
}
else {
    console.log(`Abdullah is not adult`);
}

const age = 79;
if (age === 79) console.log(`Your are near to Die`);

const ageXd = '81';
if (ageXd == 81) console.log(`Your lived Enough`);

const agePrompt = prompt("What is your age");
console.log(agePrompt);
console.log(typeof agePrompt);

if (agePrompt === 11) {
    console.log("What is your age");
}

if (agePrompt == 11) {
    console.log("What is your age")
}

if (agePrompt === Number(11)) {
    console.log("What is your age");
}

if (agePrompt === String(11)) {
    console.log("What is your age");
}

//Prompt-With-Default-Number-Value
const agesPrompt = Number(prompt("What is your age"));
console.log(agesPrompt);
console.log(typeof agesPrompt);

if (agesPrompt === 11) {
    console.log("What is your age");
}

if (agesPrompt == 11) {
    console.log("What is your age")
}

if (agesPrompt === Number(11)) {
    console.log("What is your age");
}

if (agesPrompt === String(11)) {
    console.log("What is your age");
}

const ageNew = Number(prompt("Write your age"));
console.log(ageNew);

if (ageNew === 18) {
    console.log("You can be a member now");
}
else if (ageNew === 60) {
    console.log("You can't register your self as a member now sooner you going to die")
}
else if (ageNew === 17) {
    console.log("your age is under 18, you can't fit as a member, Thanks")
} else {
    console.log("Why not your age is 22, 25, 27, 28 or something else");
}

if (ageNew !== 18) console.log("Why not 18");

//Logical Operators
const abdullahAge = true;
const abdullahDOB = false;

console.log(abdullahAge && abdullahDOB); //& Operators
console.log(abdullahAge || abdullahDOB); //Or Operators
console.log(!abdullahAge); // Not Operators

const ageLimit = abdullahAge && abdullahDOB;
if (ageLimit) {
    console.log('You can now enroll as a member');
} else {
    console.log(`You can't enroll as a member now`);
}

//For best it's good to to add conditoins in if/else rather creating variables for consitions
if (abdullahAge && abdullahDOB) {
    console.log('You can now enroll as a member');
} else {
    console.log(`You can't enroll as a member now`);
}

//Or base operators example
if (abdullahAge || abdullahDOB) {
    console.log('You can now enroll as a member');
} else {
    console.log(`You can't enroll as a member now`);
}

//Not base operators example
if (abdullahAge || abdullahDOB) {
    console.log('You can now enroll as a member');
} else {
    console.log(`You can't enroll as a member now`);
}

const ageLimitIncrease = false; //c

console.log(abdullahAge || abdullahDOB || ageLimitIncrease);

if (abdullahAge && abdullahDOB && !ageLimitIncrease) {
    console.log('You can now be a member');
} else {
    console.log('You can not become member for now')
}

const dolphins = 96 + 108 + 89;
console.log(`Score Dolphins: ${dolphins}`);

const koalas = 88 + 91 + 110;
console.log(`Score Koalas ${koalas}`);

if (dolphins > koalas) {
    console.log('Dolphins win the Trophy');
} else {
    console.log('Koalas win the Trophy');
}
console.log(` `);

console.log(`With average method`);

console.log(` `);

const scoreDolphins = (96 + 108 + 89) / 3
console.log(`Score Dolphins: ${scoreDolphins}`);

const ScoreKoalas = (88 + 91 + 110) / 3
console.log(`Score Koalas ${ScoreKoalas}`);

if (scoreDolphins > ScoreKoalas) {
    console.log('Dolphins win the Trophy');
} else {
    console.log('Koalas win the Trophy');
}

const teamDolphin = (97 + 112 + 101) / 3
const teamKoalas = (109 + 95 + 106) / 3
console.log(`Team Dolphin Score: ${teamDolphin}
Team Koalas Score ${teamKoalas}`);

const minimumScoreToWin = 100;

if (teamDolphin > teamKoalas && minimumScoreToWin) {
    console.log('Dolphin Win');
} else if (teamDolphin === teamKoalas) {
    console.log('Both teams wins, no one going to have the trophy! AAAAHHHH :(');
} else if (teamKoalas > teamDolphin && minimumScoreToWin) {
    console.log('Koalas Wins');
} else {
    console.log('Dolphin Lose');
}

if (teamDolphin >= teamKoalas && minimumScoreToWin) {
    console.log('Dolphin Win');
} else if (teamDolphin === teamKoalas) {
    console.log('Both teams wins, no one going to have the trophy! AAAAHHHH :(');
} else if (teamKoalas >= teamDolphin && minimumScoreToWin) {
    console.log('Koalas Wins');
} else {
    console.log('Dolphin Lose');
} 

//Switch Statement

const day = 'Monday';
//switch (Monday)
//For the damn streaks
