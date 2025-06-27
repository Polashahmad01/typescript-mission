{
  //
  class Person {
    getSleep() {
      console.log('I am sleeping for 8 hours each day.');
    }
  }
  
  class Student extends Person {
    getSleep() {
      console.log('I am sleeping for 7 hours each day.');
    }
  }
  
  class Developer extends Person {
    getSleep() {
      console.log('I am sleeping for 6 hours each day.');
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  }

  const person = new Person();
  const student = new Student();
  const developer = new Developer();

  // getSleepingHours(person);
  // getSleepingHours(student);
  // getSleepingHours(developer);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class RectAngle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  }

  const shape = new Shape();
  const circle = new Circle(10);
  const rectAngle = new RectAngle(10, 20);
  
  // getShapeArea(shape);
  // getShapeArea(circle);
  // getShapeArea(rectAngle);

  //
}