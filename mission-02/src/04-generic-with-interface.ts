{
  // Generic with interface
  interface People<T, J = null> {
    name: string;
    age: number;
    device: {
      bandName: string;
      model: string;
      releaseYear: number;
    },
    car: T,
    bike?: J
  }

  type Car2 = {
    name: string;
    model: string;
    price: number;
  }

  const poorPeople: People<Car2> = {
    name: 'John',
    age: 23,
    device: {
      bandName: 'Walton',
      model: 'X-30',
      releaseYear: 2024
    },
    car: {
      name: 'Toyota',
      model: 'Corrola',
      price: 100000,
    }
  }

  interface Car {
    name: string;
    price: number;
    releaseYear: number;
  }

  interface Bike {
    name: string;
    brand: string;
    price: number;
    releaseYear: number;
  }

  const richPeople: People<Car, Bike> = {
    name: 'Polash',
    age: 23,
    device: {
      bandName: 'D-36',
      model: 'C86',
      releaseYear: 2025
    },
    car: {
      name: 'Chevron',
      price: 199999,
      releaseYear: 2025
    },
    bike: {
      name: 'Suzuki FI ABS',
      brand: 'Suzuki',
      price: 299999,
      releaseYear: 2025
    }
  }

  //
}