//for each loop not return anything

const arr=[1,23,4,5,5,6]
// const sarr=arr.forEach(function (items) {
//     // console.log(items);
//     return items>6
// })
// console.log(sarr);



// for returnign we use filter
const sarr=arr.filter((items)=>{
    // return items+5 //not working because it is return only boolean value and return actual items
   return items
})
console.log(  sarr);//fiters return array  actual items when returning true



//...for returning anything we use map ..
const rarr=arr.map((items)=> items+'1')//unlike filter it's return anything ....)
console.log(rarr);


const asch=arr.map((nums)=>nums*10).map((nums)=>nums+1).filter((nums)=>(nums>51))
console.log(asch);