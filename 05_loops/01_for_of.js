//for and while and do while are all same as cpp

//for of

let array=[1,2,3,4,5]
let str="Hitesh anna"

//for of working on array string and map...not on object
for (const arr of str ) {
    if(arr===' ')break;
    //console.log(`${arr}`);

}

let mp=new Map()
mp.set(5, "javas")
mp.set(4, "cpp")
// console.log( typeof mp.keys());

for (const it of mp.keys()) {
    console.log(it);
}

// console.log(mp.size);



const obj={
    js:"hitesh",
    cpp:"harry"
}

// for (const it of obj) {
//     // console.log(it);         //not working for object
    
// }


