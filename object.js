// //CLASS INHERITANCE

// //Example 1

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

// userOne.login().logout().hot().updateScore();
// userTwo.updateScore()
// userTwo.updateScore()
// userTwo.updateScore()
// userTwo.updateScore()

class Admin extends User{
  
deleteUser(user){
  users = users.filter(u =>{
   return u.email != user.email;
  })
}


}



const userOne = new User ("kingsley" , "kingsley222@gmail.com", "kenya");
const userTwo = new User ("Ebuka" , "ebuka@outlook.com", "Abuja");
const admin = new Admin ("Adaobi", "Adaobi@gmail.com");

let users = [ userOne , userTwo , admin]


admin.deleteUser(userOne)
console.log(users);