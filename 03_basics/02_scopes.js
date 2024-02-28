//scope -->if..else,loops and function 
//object la scope nasto to syntax asto 

var a=10

let b=11

if(true)
{
 var a=13
 let b=12

}
console.log(b);//let follow the scope rules
console.log(a)//var not follow the scope rules ,hence chances of error are come


//nested scope

function one(){
    const user="hitesh"
    function two(){
        const web="youtube"
        console.log(user+" "+web);

    }
    // console.log(web);
    two()
}
one()
// console.log(user);


//two ways of declaring functions

//1. simple function 
mybff()
 function mybff(){
    console.log("kuch to log kahenge");


 }
//  mygff()
 const mygff=function () {
    console.log("logo ka kam hai kehna");

 }
 mygff()