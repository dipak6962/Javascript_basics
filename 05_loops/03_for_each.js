const myArr=["js","ruby","java","cpp"]

// myArr.forEach(function (params) {
//     console.log(params);
// })

// myArr.forEach((element) => {
//     console.log(element);
// });

// function print(element) {
//     console.log(element);
// }

// myArr.forEach(print)


myArr.forEach((val,index,arr)=>{
    console.log(val ,index,arr);
})


//array of object

const newarr=[
    {
        js:"javas",
        cpp:"c++",
        rb:"ruby"
    },{
        js:"javas",
        cpp:"c++"
    }
]

newarr.forEach((val)=>{
    console.log(val.rb);
})