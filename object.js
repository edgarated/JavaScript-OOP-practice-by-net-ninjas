//METHOD CHAINING

//Example 1

class User{

constructor(name, email, location,){
this.name =name;
this.email = email;
this.location = location;
this.score = 0;

}
login(){
  console.log(`${this.email} just logged in`)
  return this
}
logout(){
  console.log(`${this.email} just logged out`)
  return this
};

hot(){
  console.log(` his location is ${this.location} `);
  return this;
}
updateScore(){
  this.score++
  console.log(`${this.score}`);
  return this;
}
}
const userOne = new User ("kingsley" , "kingsley222@gmail.com", "kenya");
const userTwo = new User ("Ebuka" , "ebuka@outlook.com", "Abuja");

userOne.login().logout().hot().updateScore();
userTwo.updateScore()
userTwo.updateScore()
userTwo.updateScore()
userTwo.updateScore()


//Example 2

class Hope{

  constructor(subject,name){
this.subject = subject;
this.name = name;
this.score = 0;
  }
  updateScore(){
    this.score++
    console.log(`${this.subject} ${this.score}`);
    return this;
  }
  names(){
    console.log(`${this.name} is not a good man`)
    return this;
  }
}

const userOne = new Hope("Mathematics", "tunde");

userOne.names().updateScore();