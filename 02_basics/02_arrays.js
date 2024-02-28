const arr1=[1,2,3,4]
const arr2=[5,6,7,8]

// arr1.push(arr2)
// console.log(arr1);//not proper concating

const newarr=arr1.concat(arr2)
console.log(newarr);//right way 

const newarr1=[...arr1,...arr2]//spread operator
console.log(newarr1);

// intersting 
const a_arr=[1,2,[3,4],[5,[6,7]]]
//we want to separate element and add this in one array 
console.log(a_arr.flat(Infinity));


//converting in array

console.log(Array.isArray(a_arr));
//from
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"}));//interesting because we are not giving of create array of key or values

console.log(Array.of(1,2,3,true));