{
  // Conditional types
  type A1 = null;
  // type A1 = number;
  type B1 = undefined;
  // type B1 = string;
  
  type X = A1 extends null ? true : false;

  type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;

  type Animal = {
    name: string;
    species: string;
    isNew: boolean;
  }

  type CheckAnimal<T> = T extends keyof Animal ? true : false;
  
  type IsName = CheckAnimal<'name'>;
  type HasSpecies = CheckAnimal<'species'>;
  type IsNew = CheckAnimal<'isNew'>;

  //
}