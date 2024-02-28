const nam ="hitesh"
const repo=50

// console.log(name+repo);
//old way not optimal

console.log(`my name is ${nam} and repo is ${repo}`);
 let newstr=new String(" hello world")
const s=newstr.concat(" ",nam)

 console.log(s);
 //console.log(newstr.()); //touppercase ,lowercase,trim,slice,substring

 const newstr1=newstr;
//  newstr="poiuu"
 console.log(newstr[4]);
 console.log(newstr.includes("llo"));




 //Number 
 const balance=new Number(100)
 console.log(balance.toFixed(1));

 let bal=100.444
 console.log(bal.toPrecision(4));

 bal=10000000
 console.log(bal.toLocaleString('en-IN'));





 //Math
 console.log(Math.floor(5.6));
 console.log(Math.ceil(5.6));
 console.log(Math.round(5.6));
 console.log(Math.max(5,6));
 console.log(Math.min(5,6));

console.log(Math.round(Math.random()*10));
//if we want to between a=10 and b=20

const a=10,b=20
console.log(Math.floor(Math.random()*(b-a+1))+a);
