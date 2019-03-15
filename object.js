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

  console.log(userOne.login());
console.log(userOne.logout());













