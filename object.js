//PROTOTYPE INHERTANCE

function User(name, email){
this.name =name;
this.email = email;
this.login = function(){
  console.log(`${this.email} just logged in`)
}
this.logout = function(){
  console.log(`${this.email} just logged out`)
}

}


function Admin(...args){
User.apply(this, args )
this.role = "super admin"
}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user){
 users = users.filter(u => {
return user.email != u.email;

 })

}


const userOne = new User("Benson", "benjgmail.com");
const userTwo = new User("Amara", "Amaraocha@yahoo.com");
const admin = new Admin("yinka", "yinka@gmail.com");

let users = [userOne, userTwo, admin]


console.log(users);
admin.deleteUser(userOne);
console.log(users);






