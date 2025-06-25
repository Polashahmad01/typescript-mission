{
  //
  const rollNumberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nationalIdNumberArray: number[] = [123, 345, 346, 345, 456, 456];

  const arrayOfRollNumberAndNationalIdNumber: number[] = [...rollNumberArray, ...nationalIdNumberArray];

  const phoneUser: {
    name: string;
    brand: string;
    price: number;
    isNew: boolean;
  } = {
    name: 'john',
    brand: 'samsung',
    price: 999,
    isNew: true,
  }

  const lapTopUser: {
    name: string;
    brand: string;
    price: number;
    isMac: boolean
  } = {
    name: 'Polash',
    brand: 'Apple',
    price: 1399,
    isMac: true
  }

  const iTDeviceUser = {
    ...phoneUser,
    ...lapTopUser
  }

  const greetFriend = (...friends: string[]) => {
    friends.forEach(friend => console.log(`welcome mr ${friend}`));
  }

  greetFriend('John', 'Kate', 'Nancy');
  //
}