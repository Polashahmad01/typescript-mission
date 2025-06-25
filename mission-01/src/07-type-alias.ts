{
  //

  type Student = {
    name: string;
    age: number;
    gender: 'male' | 'female';
    mobileNumber?: string;
    address: string;
  }

  const studentOne: Student = {
    name: 'Istiak',
    age: 20,
    gender: 'male',
    address: 'DH'
  };

  const studentTwo: Student = {
    name: 'Ahmad',
    age: 22,
    gender: 'male',
    mobileNumber: '01234234',
    address: 'RA'
  };

  const studentThree: Student = {
    name: 'Polash',
    age: 25,
    gender: 'male',
    mobileNumber: '123512',
    address: 'SG'
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = 'Polash';
  const isAdmin: IsAdmin = true;

  type Add = (numOne: number, numTwo: number) => number;
  
  const add: Add = (numOne, numTwo) => numOne + numTwo;

  //
}