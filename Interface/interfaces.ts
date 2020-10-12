interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const drinkInterface = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const newTesla = {
  name: 'Tesla',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}
              Year: ${this.year}
              Broken? ${this.broken}`;
  },
};

//This is really long and can get even longer with more keys in the object. We can use Interfaces to stop this.
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}
              Year: ${vehicle.year}
              Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

const printVehicleInterface = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary);
};

// printVehicleInterface({name:'tesla', year:2020, broken:1}); // This will be broken as broken needs to be boolean.

printVehicleInterface(newTesla);

printSummary(drinkInterface);
printSummary(newTesla);
