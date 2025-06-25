{
  //

  // Nullable type
  const runSearchQuery = (term: string | null) => {
    if(term) {
      console.log('Searching...');
    } else {
      console.log('Nothing to search...');
    }
  }

  // runSearchQuery('Polash');
  // runSearchQuery(null);


  // Unknow type
  const convertUnknowType = (input: unknown) => {
    if(typeof input === 'number') {
      console.log(`This is a ${typeof input} type`);
    } else if (typeof input === 'string') {
      console.log(`This is a ${typeof input} type. Uppercase: ${input.toUpperCase()}`);
    } else {
      console.log(`wrong type`);
    }
  }

  // convertUnknowType('hello');
  // convertUnknowType(100);
  // convertUnknowType(null);


  // Never type
  function throwCustomError(message: string): never {
    throw new Error(message);
  }

  // throwCustomError('Error made by Polash');

  //
}