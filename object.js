//CLASS CONTRUCTORS

//Example 1
class User{
constructor(name, email){
this.name = name;
this.email = email;


}

}
const firstOne = new User("kunle" , "ojota@yahoo.com");
const secondTwo = new User("ekaboo" , "kunfulee@gmail.com")
console.log(firstOne);
console.log(secondTwo)


//Example 2
class Detail {
constructor(name, email,location,age){

this.name = name;
this.email = email;
this.location = location;
this.age = age;

}

}
const userOne = new Detail("Kunle", "kunle22@hotmail.com", "lagos", 44);
const userTwo = new Detail("Matthew", "Matt232@outlook.com", "Kano", 23);
const userThree = new Detail("Mary", "maryonyeali@gmail.com", "Abakaliki", 24);
console.log(userOne);
console.log(userTwo);
console.log(userThree);


//Example 3
class Profile{

  constructor(name,positon,country,club){
this.name = name;
this.positon =positon;
this.country = country;
this.club = club;

  }
}

const playerOne = new Profile("Messi" , "Attacker", "Argentina", "Barcelona");
const playerTwo = new Profile("Ronaldo", "Attacker","Portugal","Juventus");
const playerThree = new Profile("Hazard", "Attacker", "Belgium", "Chelsea");

console.log(playerOne)
console.log(playerTwo)
console.log(playerThree)