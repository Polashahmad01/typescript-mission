{
  //

  // Ternary Opeator
  let age = 20;

  const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
  // console.log({ isAdult });

  // Optional Chaining
  type User = {
    name: string;
    address: {
      city: string;
      state: string;
      postalCode?: null;
      currentAddress: string;
      permanentAddress?: string;
    }
  }

  const user: User = {
    name: 'John',
    address: {
      city: 'Sirajganj',
      state: 'RAJ',
      postalCode: null,
      currentAddress: 'KY'
    }
  }

  const permanentAddress = user?.address?.permanentAddress ?? 'no permanent address found.';
  const postalCode = user?.address?.postalCode ?? 'no postal code found.';
  // console.log({ permanentAddress, postalCode });

  // Nullish Coalescing => only works on null or undefined
  const undefinedUser = undefined;
  const nullUser = null;

  const undefinedUserWithUndefined = undefinedUser ?? 'Undefined User';
  const nullUserWithNull = nullUser ?? 'Nullish User';

  // console.log({ undefinedUserWithUndefined, nullUserWithNull})

  //
}