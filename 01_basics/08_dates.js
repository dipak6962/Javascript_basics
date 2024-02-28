console.log("Dates ");
const s=Date.now();
console.log(s);//calculates in miliseconds from 1970

const d=new Date();
console.log(d.setDate(15));
console.log(typeof d);
console.log(d.getDate());
console.log(d.toLocaleDateString());
console.log(d.toString());
console.log(d.toLocaleTimeString());

const newdate=new Date(2023,0,23)
const mydate=new Date(2023,0,23,5,3)

const mycdate=new Date("01-14-2023")
console.log(newdate.toDateString());
console.log(newdate.toLocaleTimeString());
console.log(newdate.getTime());//milli second
console.log(Math.floor(newdate.getTime()/1000))


