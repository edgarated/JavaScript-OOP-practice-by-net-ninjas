//CONSTRUCTORS UNDER THE HOOD

function User( name , email, location){
this.name = name;
this.email = email;
this.location = location;

this.logout = function(){
 console.log(`${this.email} just logged out`)
 return this;

}


this.login = function(){
  console.log(`${this.email} just logged in`)
  return this;
 
 }

}

const userOne = new User ("kingsley" , "kingsley222@gmail.com", "kenya");
const userTwo = new User ("Ebuka" , "ebuka@outlook.com", "Abuja");

userOne.logout().login()
// kingsley222@gmail.com just logged out
// kingsley222@gmail.com just logged in


