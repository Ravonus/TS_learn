//Typescript will know below will always have an array of strings

const carMakers = ['ford', 'toyota', 'chevy'];

//Typescript can't figure it out since it is empty. It is empty;
const anyArray = [];

const dates = [new Date(), new Date()];

const dubArray: string[][] = [];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

//Typed arrays

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatable values;

// carMakers.push(100); // <-- this will error

//help with 'map' you can now do car. and TS will tell you what you have available.
carMakers.map((car: string): string => {
  return car;
});

// Flexible types

const importantDates = [new Date(), '2030-10-10'];

const importantDatesSet: (Date | string)[] = [];

importantDatesSet.push('str');
importantDatesSet.push(new Date());
