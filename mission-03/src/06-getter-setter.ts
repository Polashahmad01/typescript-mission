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

    set addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    get checkBalance() {
      return this._balance;
    }

    // getBalance() {
    //   return this._balance;
    // }
  }

  const poorPeople = new BankAccount(12523, 'Poor People', 20);
  poorPeople.addDeposit = 100;
  const myBalance = poorPeople.checkBalance;
  console.log(myBalance);


  //
}