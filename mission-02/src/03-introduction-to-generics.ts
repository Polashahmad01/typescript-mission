{
  // Generics
  type GenericArray<T> = Array<T>;


  // const arrayOfNumbers: number[] = [12, 12, 24];
  // const arrayOfNumbers: Array<number> = [12, 12, 24];
  const arrayOfNumbers: GenericArray<number> = [12, 12, 24];

  // const arrayOfStrings: string[] = ['a', 'b', 'c'];
  // const arrayOfStrings: Array<string> = ['a', 'b', 'c'];
  const arrayOfStrings: GenericArray<string> = ['a', 'b', 'c'];

  // const arrayOfBoolean: boolean[] = [true, false, true];
  // const arrayOfBoolean: Array<boolean> = [true, false, true];
  const arrayOfBoolean: GenericArray<boolean> = [true, false, true];
  
  type User = {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: 'Kate',
      age: 23
    }
  ]


  type GenericTuple<X, Y> = [X, Y];

  const couple: GenericTuple<string, string> = ['Husband', 'Wife'];

  const person: GenericTuple<boolean, { name: string; age: number; email: string; hasMoney: boolean;}> = [
    true,
    {
      name: 'John',
      age: 23,
      email: 'john@gmail.com',
      hasMoney: true
    }
  ]

  //
}