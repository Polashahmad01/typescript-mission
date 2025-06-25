{
  //

  function add(numOne: number, numTwo: number): number {
    return numOne + numTwo;
  }

  const sum = add(10, 20);

  const sumation = (numOne: number, numTwo: number): number => numOne + numTwo;

  sumation(10, 20);

  const phoneUser: {
    name: string;
    balance: number;
    addBalance(amount: number): void;
  } = {
    name: 'Polash',
    balance: 20,
    addBalance(amount: number) {
      this.balance = this.balance + amount;
      console.log(`My blanace is: ${this.balance}`);
    },
  }

  const arrayOfNumber: number[] = [1, 2, 3, 4, 5];

  const squareValueOfNumber: number[] = arrayOfNumber.map((item: number): number => item * item);
  //
}