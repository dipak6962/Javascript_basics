//singleton
//Object.create

//objects literals-->

const mysym=Symbol("key1")
const jsUser={
    name:"hitesh",
    age:12,
    location:"pune",
   " full name":"hitesh chowdhary",
   [mysym]: "mykey1",//we declare symbols this way
   islog:false
}

//we access element of object by 2 ways
// 1. is jsUser.name and second is jsUser["full name"]
console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser[" full name"]);//for symbol and 2+ word element of object access through [] 
console.log(  jsUser[mysym]);

jsUser.age=15;
console.log(jsUser.age);
// Object.freeze(jsUser)
// jsUser.age=18;//value not change because freeze function
// console.log(jsUser.age);

jsUser.tempory=function (){
  console.log("kya chal raha hai ");
}
// jsUser.tempory();

jsUser.temporyOne=function (){
    
    console.log(`hello js user age is ${this.age}`);
}
jsUser.temporyOne()
