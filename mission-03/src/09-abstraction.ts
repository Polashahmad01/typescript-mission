{
  // Idea
  interface Vehicle1  {
    // name: string;
    // model: number;
    startEngine(): void;
    moveEngine(): void;
    stopEngine(): void;
  }

  // const vehicle1: Vehicle1 = {
  //   name: 'Toyota',
  //   model: 2000
  // }

  // Implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log('I am starting the engine');
    }

    moveEngine(): void {
      console.log('I am moving the engine');
    }

    stopEngine(): void {
      console.log('I am stoping the engine');
    }

    test() {
      console.log('I am testing the engine');
    }
  }

  const toyota = new Car();
  // toyota.startEngine()
  // toyota.moveEngine()
  // toyota.stopEngine()

  // Abstract class Idea

  abstract class Car2 {
    abstract startEngine(): void

    abstract moveEngine(): void;

    abstract stopEngine(): void;

    abstract test(): void;
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log('I am starting the engine');
    }

    moveEngine(): void {
      console.log('I am moving the engine');
    }

    stopEngine(): void {
      console.log('I am stoping the engine');
    }

    test(): void {
      console.log('I am testing the engine');
    }
  }

  // const hondaCar = new Car2();

  //
}