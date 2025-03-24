class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this._speed = 0;
  }

  accelerate(amount) {
    this._speed += amount;
    console.log(
      `${this.brand} ${this.model} ускоряется до ${this._speed} км/ч`
    );
  }

  brake(amount) {
    this._speed = Math.max(0, this._speed - amount);
    console.log(`${this.brand} ${this.model} тормозит до ${this._speed} км/ч`);
  }

  info() {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Год: ${this.year}, Скорость: ${this._speed} км/ч`
    );
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, fuelType) {
    super(brand, model, year);
    this.fuelType = fuelType;
  }

  refuel() {
    console.log(
      `${this.brand} ${this.model} заправляется топливом: ${this.fuelType}`
    );
  }
}

class ElectricCar extends Car {
  #batteryLevel;

  constructor(brand, model, year, batteryLevel) {
    super(brand, model, year, "электричество");
    this.#batteryLevel = batteryLevel;
  }

  charge(amount) {
    this.#batteryLevel = Math.min(100, this.#batteryLevel + amount);
    console.log(
      `${this.brand} ${this.model} заряжен до ${this.#batteryLevel}%`
    );
  }

  refuel() {
    console.log(`${this.brand} ${this.model} заряжается(не заправляется)!`);
  }

  get batteryLevel() {
    return this.#batteryLevel;
  }

  set batteryLevel(value) {
    this.#batteryLevel = Math.min(100, Math.max(0, value));
  }
}

const car = new Car("Toyota", "Camry", 2020, "бензин");
car.info();
car.accelerate(50);
car.brake(20);
car.refuel();
car.info();

const electricCar = new ElectricCar("Tesla", "Model S", 2022, 50);
electricCar.info();
electricCar.accelerate(60);
electricCar.charge(30);
electricCar.refuel();
electricCar.info();
