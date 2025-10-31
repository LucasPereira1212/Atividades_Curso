export default class member {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }

  authenticate = (email, password) => {
    if (email === this.email && password === this.password) {
      console.log(`Olá ${this.fullName}, bem vindo de volta`);
    } else {
      console.log(`Login invalido, tente novamente`);
    }
  };
}
