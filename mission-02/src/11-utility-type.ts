{
  // Utility Type
 
  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNumber: string;
  } 

  type Name = Pick<Person, 'name'>;
  type NameAge = Pick<Person, 'name' | 'age'>;


  // Omit
  type ContactInfo = Omit<Person, 'name' | 'age'>;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type ReadOnlyPerson = Readonly<Person>;

  const person: ReadOnlyPerson = {
    name: 'John',
    age: 23,
    email: 'p@gmail.com',
    contactNumber: '234'
  }

  // person.age = 34;

  // Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // }

  // const myObj: MyObj = {
  //   a: 'aa',
  //   b: 'bb',
  //   c: 'cc'
  // }

  type EmptyObject = Record<string, unknown>;

  const emptyObject: EmptyObject = {
    a: 'Hi',
    isWork: true
  }

  //
}