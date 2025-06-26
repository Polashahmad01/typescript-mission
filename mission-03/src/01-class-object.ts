{
  //
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // constructor(name: string, species: string, sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    // }
    constructor(public name: string, public species: string, public sound: string) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal('Your Dog', 'dog', 'gheu gheu');
  const cat = new Animal('Your Cat', 'cat', 'meu meu');
  // dog.makeSound();
  // cat.makeSound();
  

  //
}