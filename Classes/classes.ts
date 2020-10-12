class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }

  honk(): void {
    console.log('beep, beep');
  }
}

const vehicle = new Vehicle('orange');

vehicle.honk();

// class Car extends Vehicle {
//   private drive(): void {
//     console.log('Chug a chug chug');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('Chug a chug chug');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const carTest = new Car(4, 'green');

carTest.startDrivingProcess();

carTest.honk();

console.log(carTest.color);
