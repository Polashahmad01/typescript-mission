{
  // Interface, type vs interface

  type UserType = {
    name: string;
    age: number;
  }

  type IsAdmin = { role: string };

  type UserWithAdmin = UserType & IsAdmin;

  const userWithAdmin: UserWithAdmin = {
    name: 'Ka',
    age: 234,
    role: 'admin'
  }

  const userWithType: UserType = {
    name: 'John',
    age: 25,
  }

  interface UserInterface {
    name: string;
    age: number;
  }

  interface UserInfo extends UserInterface {
    role: string;
  }

  const userInfo: UserInfo = {
    name: 'sdf',
    age: 234,
    role: 'sdf'
  }

  const userWithInterface: UserInterface = {
    name: 'John',
    age: 25,
  }

  type Roll1 = number[];

  interface Roll2 {
    [index : number]: number
  }

  const rollNumber1: Roll1 = [12, 234, 23];
  const rollNumber2: Roll2 = [12, 234, 23];

  type Summation = (num1: number, num2: number) => number

  const summation: Summation = (num1, num2) => {
    return num1 + num2;
  }

  interface Addition {
    (num1: number, num2: number): number;
  }

  const addition: Addition = (num1, num2) => {
    return num1 + num2;
  }

  //
}