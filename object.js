//CLASS METHODS

//Example 
class User{

  constructor(name, email){
this.name = name;
this.email = email;
  }
  login(){
    console.log(`The user with ${this.email} just logged in now`)
  };
  logout(){
    console.log(`The user with ${this.email} just logged out now`)
  }
  fullName(){
    console.log(`The user ${this.name} is not in our record`);
  }
}

const userOne = new User("Ebuka", "chukwuebukaaneke@outlook.com");
const userTwo = new User("Ginika", "prettyginika06@gmail.com");

userOne.login();
userTwo.logout();
userOne.fullName();

