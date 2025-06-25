{
  // Type Assertion
  let anyVariable: any;

  anyVariable = 'Hello World!';

  (anyVariable as string).toUpperCase();

  anyVariable = 1234;

  (anyVariable as number).toFixed(2);

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      const convertedValue = parseFloat(value) * 100;
      return `The converted value is: ${convertedValue}`;
    }

    if(typeof value === 'number') {
      return value * 1000;
    }
  }

  const resultUsingNumber = kgToGram(100) as number;
  const resultUsingString = kgToGram('1000') as string;
  // console.log({ resultUsingNumber, resultUsingString });

  type CustomError = {
    message: string;
  }

  try {
    // throw new Error('Error thrown by polash');
  } catch(error) {
    console.log((error as CustomError).message);
  }

  //
}