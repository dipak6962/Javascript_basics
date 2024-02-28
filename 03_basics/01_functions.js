
function myFunction(){
    console.log("My name is khan");

}
// myFunction()
function add2(num1,num2){//parameters
  return num1+num2
}
// add2(4,5)//arguments
// console.log(add2(4,5));
const result=add2(8,5)
// console.log("result :",result);

function login(username="sam" ){//default parameters
    if(!username){
        console.log("Plz enter username");
        return 
    }
    return `${username } just logged in`
}
// console.log(login());


//rest operator -->when shopping cart is there we don't know 
// how many values are coming to us then we use rest operator

function shoppingCart(par1, ...nums1){
    return nums1
}
console.log(shoppingCart(200,300,400,500));//nums1 is creates a dynamic array by using rest operator

//object and function

const myobj={
    user:"baki sab theek",
    reply:"haa chal raha hai"

}
function funObj(anyobject){
    console.log(`user says ${anyobject.user} i gave reply is ${anyobject.reply}`);
    
}
funObj(myobj)


//array and function 

const myArr=[100,300,500]

function arrObj(anyarr){//return second element from array

    return anyarr[1]
}
console.log(arrObj(myArr));