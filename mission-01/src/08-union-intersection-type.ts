{
  //

  // Union
  type Gender = 'Male' | 'Female';
  type MaritalStatus = 'Married' | 'UnMarried';
  type GenderWithMaritalStatus = Gender | MaritalStatus;

  const gender: Gender = 'Male';
  const maritalStatus: MaritalStatus = 'Married';
  const genderWithMaritalStatus: GenderWithMaritalStatus = 'Married';

  // Intersection
  type Student = {
    id: number;
    name: string;
    rollNumber: number;
  }

  type Person = {
    name: string;
    uuid: string;
    address: string;
  }

  type StudentAndPersonIntersection = Student & Person;

  const studentAndPersonIntersection: StudentAndPersonIntersection = {
    id: 234,
    name: 'Polash',
    uuid: 'sf23',
    address: 'DH',
    rollNumber: 234
  }

  //
}