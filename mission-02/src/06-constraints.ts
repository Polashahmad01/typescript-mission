{
  // Constraints
  const functionWithConstraintOrLimitByKey = <T extends { name: string; age: number; isMarried: boolean;}> (obj: T) => {
    const extraData = 'Extra information';

    return {
      ...obj,
      extraData
    }
  };

  const result1 = functionWithConstraintOrLimitByKey({ name: 'John', age: 20, isMarried: true });
  const result2 = functionWithConstraintOrLimitByKey({ name: 'Kate', age: 25, isMarried: true, love: 'I love you.' });
  // const result3 = functionWithConstraintOrLimitByKey({ love: 'I love you.' });
  console.log({ result1, result2 });

  //
}