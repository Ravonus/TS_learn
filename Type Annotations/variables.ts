let apples: number = 5;

//apples =  'asd'  Bad because number is set

apples = 123; //good because it is a number

let speed: string = 'fast';
let hasName: boolean = true;
let isNull: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

//Array

let colors: string[] = ['red', 'blue', 'green'];

colors.push('asd'); // Can do
//colors.push(1) // can't do

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes

class CarClass {}

let carVar: CarClass = new CarClass();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

point.x = 123; // Can do because x === number.

//point.x = '123'; //Can't do because x needs to be a number

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);

  i = 123;
  //i = '123'; Won't work
};

//All of these Annotations are not required as Typescript Inference can figure it all out So when do you rely on it? Primatives are going to be Inference.

// When to use annotations JSON.parse === any type... We need to fix this with Annotations.

const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//Delayed Initializations

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
    //foundWord = 'asd' //Can't do
  }
}

//When Inferences doesn't work

let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
    console.log(numberAboveZero);
  }
}
