{
  //
  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if(typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  }

  // console.log(add(1, 5));
  // console.log(add('1', '5'));

  type NormalUser = {
    name: string;
  }

  type AdminUser = {
    name: string;
    role: string;
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if('role' in user) {
      console.log(`My name is ${user.name}. My role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  }

  const normalUser: NormalUser = {
    name: 'Normal User'
  }

  const adminUser: AdminUser = {
    name: 'Admin User',
    role: 'admin'
  }

  // getUser(normalUser);
  // getUser(adminUser);

  //
}