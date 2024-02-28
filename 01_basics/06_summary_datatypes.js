
//types:: 1)primitive:->call by value type it will pass the copy

//7 types-number,string ,bigint,boolean,null,symbol,undefined

const newno=123;
const newno2=123.4
 // above both are number type

 const id=Symbol("123")//symbol used for uniqueness 
 const anotherId=Symbol("123")
 //even above both symbol have passed same string but they will create unique symbol
 console.log(id===anotherId);
console.log(typeof id);





 //*****reference(non primitive)
 
 //Array,objects,functions

 const heros=["super","shakti","iron"]
 //array type

 let myObj={
    name:"noname",
    age:19
 }
  //object


 let myFfunction=function(){
   console.log("hello world");
  }
 console.log(typeof myFfunction);//function
  
 console.log(typeof myObj);//object
 console.log(typeof heros);//object
  



 
 ///****************stack(primitive ) and Heap memory(Non primitive) */
 
 let myobj=myObj;
 myobj.age=44
 console.log(myObj.age);

