{
  //
  const person: {
    firstName: string;
    middleName: string;
    lastName: string;
    mobileNumber: number;
    address: {
      city: string;
      state: string;
      postalCode: number;
      currentAddress: string;
      permanentAddress: string;
    }
  } = {
    firstName: 'Istiak',
    middleName: 'Ahmad',
    lastName: 'Polash',
    mobileNumber: 0,
    address: {
      city: 'SI',
      state: 'RJ',
      postalCode: 23354,
      currentAddress: 'Koyra',
      permanentAddress: 'Koyra'
    }
  }

  const { firstName, lastName, middleName, address: { city: CITY, currentAddress }} = person;


  const names = ['kate', 'smith', 'nancy', 'joe', 'nat', 'jerry'];
  const [kate, , , joePerson, ...restPerson] = names;
  //
}