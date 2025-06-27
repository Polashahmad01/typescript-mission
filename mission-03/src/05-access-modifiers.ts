{
  //
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance
    }
  }
  
  const poorPeople = new BankAccount(234234, 'Poor People', 20);
  // poorPeople.id = 23523;
  // poorPeople._balance = 40;
  poorPeople.addDeposit(20);
  const myBalance = poorPeople.getBalance();
  console.log(myBalance);

  //
}