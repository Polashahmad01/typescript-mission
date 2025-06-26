{
  // Constraints using keyof
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = 'bike' | 'car' | 'ship';

  type Owner2 = keyof Vehicle;

  // const person: Owner = 'bike';
  const person: Owner2 = 'ship';

  const getPropertValue = <T, K extends keyof T> (obj: T, key: K) => {
    return obj[key];
  }

  const person1 = {
    name: 'john',
    age: 22
  }

  const person2 = {
    roll: 2,
    uuid: 2334
  }

  const result1 = getPropertValue(person1,'age');
  const result2 = getPropertValue(person2,'uuid');
  // console.log({ result1, result2 });

  //
}