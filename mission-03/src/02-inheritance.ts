{
  //
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student = new Student('John', 22, 'BD');
  // student

  class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} take ${numberOfClass} class`);
    }
  }

  const teacher = new Teacher('Kate', 30, 'USA', 'professor');
  // teacher

  //
}