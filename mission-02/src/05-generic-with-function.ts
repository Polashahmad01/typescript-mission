{
  // Function with generic
  const createArray = (param: string): string[] => {
    return [param];
  }

  const result1 = createArray('Your Name');
  // console.log(result1);

  const createArrayWithGenericUsingFunction = <T> (param: T): T[] => {
    return [param];
  }

  const result2 = createArrayWithGenericUsingFunction('Your Name');
  const result3 = createArrayWithGenericUsingFunction<boolean>(true);

  interface User {
    name: string;
    email: string;
    age: number;
  } 
  
  const result4 = createArrayWithGenericUsingFunction<User>({name: 'john', email: 'j@gmail.com', age: 25});
  // console.log({result2, result3, result4 });

  const createGenericArrayTuple = <T, Q> (paramOne: T, paramTwo: Q): [T, Q] => {
    return [paramOne, paramTwo];
  }

  const result5 = createGenericArrayTuple('Male', 'Female');
  const result6 = createGenericArrayTuple<{name: string, age: number}, { isMarried: boolean; hasMoney: boolean}>({ name: 'John', age: 22}, { isMarried: true, hasMoney: true});
  // console.log({result5, result6});

  const addExtraInfo = <T> (obj: T): T & { extraInfo: string } => {
    const extraInfo = 'This is an extra information';

    return {
      ...obj,
      extraInfo
    }
  }

  const extraResult = addExtraInfo({ name: 'Kate', age: 22, roll: 34 });
  const extraResult2 = addExtraInfo({ balance: 20, releaseYear: 2002 });
  console.log({ extraResult, extraResult2 })

  //
}