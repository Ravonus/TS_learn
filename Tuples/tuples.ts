const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//issue with this you can swap order - so order is not fixed.
const pepsi = ['brown', true, 40];
pepsi[0] = 40;
pepsi[1] = 'brown';
// Above is bad that is where truple comes in.

const coke: [string, boolean, number] = ['brown', true, 42];

// coke[1] = 123  // Now this won't work we will get an error.

coke[0] = 'brown';

//You can instead make a type so you don't have to write this out as the developer on every new array of this type.

type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 37];

// const mountanDew: Drink = [true, 'clear', 37];  // This will error as the Drink type has a fixed order.

const tea: Drink = ['brown', false, 0];

// You won't use Tuples that much.

const carSpecs: [number, number] = [400, 3354]; // You will typically make an ojbect or class for these things.

//objects have keys so its way more readable as someone else if this see this. Yes Tuples will show errors while coding, but it doesn't really tell the developer in question what the variables mean like a Class or Object will.
const carStats = {
  horsepwoer: 400,
  weight: 3354,
};
