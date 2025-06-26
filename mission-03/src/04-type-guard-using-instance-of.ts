{
  //
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log('I am making sound.');
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log('I am barking');
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeu() {
      console.log('I am meauing');
    }
  }

  const isDog = (animal: Animal) => animal instanceof Dog;
  const isCat = (animal: Animal) => animal instanceof Cat;

  const getAnimal = (animal: Animal) => {
    // if(animal instanceof Dog) {
    //   animal.makeBark();
    // } else if(animal instanceof Cat) {
    //   animal.makeMeu();
    // } else {
    //   animal.makeSound();
    // }

    if(isDog(animal)) {
      animal.makeBark();
    } else if(isCat(animal)) {
      animal.makeMeu();
    } else {
      animal.makeSound();
    }
  }

  const animal = new Animal('Animal name', 'animal');
  const dog = new Dog('Dog name', 'dog');
  const cat = new Cat('Cat name', 'cat');
  
  // getAnimal(animal);
  // getAnimal(dog);
  // getAnimal(cat);

  //
}