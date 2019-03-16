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
//To change property of an object
userTwo.name = "Kelvin";
console.log(userTwo.name);
//prints out Kelvin
userTwo["name"] = "Kunle";
console.log(userTwo["name"]);
//prints out Kunle

//Another way to access the property of an object is by using [] ;
console.log(userTwo["email"]);
//prints out ketu@hotmail.com














