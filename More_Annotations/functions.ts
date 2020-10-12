// const addBad = (a: number, b: number): number => {
//   return 'ast'
// }; THis is bad because its returning a string and we are telling typecript it should return a number.

//This is good because re return a + b and those are numbers.
const add = (a: number, b: number): number => {
  return a + b;
};

//Why you want to use return annotations - This does not error because of no return;
const add2 = (a: number, b: number) => {
  a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = (a: number, b: number): number => {
  return a * b;
};

//Void and Never

//Use void if no return is used.
const logger = (message: string): void => {
  console.log(message);
};

//never will reach the end of the function
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
