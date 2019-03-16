 //OBJECT LITERALS

  let userOne = {
    name: "Ebuka",
    email: "ebuka@outlook.com",
    login(){
     console.log(this.email , "has logged in");
    },
    logout(){
      console.log(this.email ,"has logged out");
    }
  };

//   console.log(userOne.login());
// console.log(userOne.logout());


let userTwo = {

name : "ketu",
occupation: "fishing",
age: 23,
email : "ketu@hotmail.com",
login(){
  console.log(this.email, "is logged in")
},
logout(){
  console.log(`${this.email}, is logged out`)
}
}
console.log(userTwo.logout());













