

const myArr=[1,2,3]

const mytotal=myArr.reduce(function (acc,currval) {
    // console.log(`acc :${acc} and currval:${currval}`);
    return acc+currval
},0)
console.log(mytotal);

const newtotal=myArr.reduce((acc,currval)=>acc+currval,0)
console.log(newtotal);

//find the sum of prices

const courses=[
    {
        name:"java",
        price:199

    },{
        name:"python",
        price:99
    },
    {
        name:"subodh",
        price:49
    }
]

const totalprice=courses.reduce((acc,currval)=>{
    return acc+currval.price
},0)
console.log(totalprice);