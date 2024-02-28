//singleton
//Object.create
const tuser=new Object()//singlton
// or 

//const tuser={}
tuser.id="123a"
tuser.name="sam"
tuser.isLogged=false

// console.log(tuser);

const ruser ={
    email:"@gmail.com",
    fullname:{
        name:{
            n:"hitesh"
        }
    }
}
// console.log(ruser.fullname.name.n);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

console.log(Object.keys(tuser));//datatype of result is array ***
console.log(Object.values(tuser));
console.log(Object.entries(tuser));
console.log(tuser.hasOwnProperty("isLogged"));

//concating 2 or objects
const objj=Object.assign({},obj1,obj2)
console.log(objj);
//or spread operator
const objn={...obj1,...obj2}
console.log(objn);


//destructoring of object
const course={
    c_name:"chai aur code",
    courseInstructor:"Hitesh Chowdhari"

}

const {courseInstructor: instructor} = course//***** */
console.log(instructor);