

//this -->current context works in object function not in standlone function
const user={
    name:" hitesh",
    obj:{
       kaise:" hua",
       welcomeMsg: function(){
        console.log(this);
    }
    },
    welcomeMsg: function(){
        const check=false
        console.log(`name is ${this.name} check is ${check}`);
        console.log(this);
    }
}
// console.log(this);{} output comes because node ...

// user.obj.welcomeMsg()


// user.welcomeMsg()
// user.name="viruu"
// user.welcomeMsg()



// const kuchbhi=function(){
//     const k=0
//     console.log(this.k);
// }
// kuchbhi()
//but it will not provide but not work as in object 


//arrow function

const chai =()=>{
    let username="hitesh anna"
    console.log(this);
}
// chai()

//explit arrow function
const addTwo =(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(9,7))

//implicit arrow function

const addtwo=(num1,num2)=>(num1+num2)//not required return keyword

console.log(addtwo(9,7))

//when we want to return object implicitly
const usr=()=>({username:"jadoo"})
console.log(usr());

