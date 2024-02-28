//arrays

const arr=[1,2,3,true,"viraj",1]//array are resizable,
//array can contain element of different datatypes
//retrivel is 0 based indexing
//if we copy array in other var then shallow copy create
// console.log(typeof arr[3]);
const myheroes=new Array("shakti","jadoo")
myheroes.push(7)
myheroes.push(9)
myheroes.pop()
// console.log(myheroes.length);

myheroes.unshift(0);//push element from front

console.log(myheroes);
myheroes.shift();//pop element from front

console.log(myheroes);


// console.log(arr.includes(3));//give true if present
// console.log(arr.indexOf(1,1));//give index of element from front 
//if we want to get index of second element then we can give start index

//***********slice and splice */
//slice does not change original array but splice breaks array in 2 parts
console.log(`before slice ${arr} and after slice:`);
const arr1=arr.slice(1,3)//3 is not includes in slice
console.log("Arr: ",arr);
console.log(arr1);
console.log(`before splice ${arr} and after slice:`);
const arr2=arr.splice(1,3)//from range 1 to 3] (includes) array breaks down
console.log("Arr: ",arr);
console.log(arr2);
