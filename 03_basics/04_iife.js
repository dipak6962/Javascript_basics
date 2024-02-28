//immediately invoked function expressions(IIfe)

//why -->for immediately invoking and prevent the pollution from global scope

(function chai (name ){
    //named iife
    console.log(`db is invoked by ${name}`);

})("anna");
//; is required to end one iife because when we add another iife then it gives error


((name)=>{
    //simple iife
    console.log(`db2 is invoked by ${name}`);
})("jitu bhaiya")

