
//forin for object
const myObj={
    js:"javas",
    cpp:"c++",
    rb:"ruby"
}
for (const key in myObj) {
    // console.log(`${key} shortcut for :${myObj[key]}`);
}

// console.log(myObj["js"]);


//forin for array

const myArr=["js","cpp","ruby"]

for (const key in myArr) {
    console.log(myArr[key]);
}

//for in loop not work on map because map is not iteratable
