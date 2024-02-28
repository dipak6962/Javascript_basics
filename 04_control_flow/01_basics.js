//falsy value-->false,0,-0,BigInt 0n,null,undefined,NaN,""

// truthy values-->"0","false"," ",[],{},fuction(){}

//if else ,switch is working same as cpp
//false==0 ->true....

//for checking array is empty or not use .length property
//for checking object is empty or not use Object.keys.lenght
//because .keys returns array

//Nullish Coalescing operator(??):null undefined


let val1;

// val1=5??10
// val1=null??10
// val1= 10 ?? undefined
// val1= null??10??11
val1 = null ?? undefined
console.log(val1);


