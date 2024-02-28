const accountId=144553;//variable not change throughout the code


let accountEmail="dipakgoogle.com";//for declaring variable

var accountPass="1234"//it's also for declaring variable but problem is that var not follow scope property
accountCity="jaipur"//if we not give let or var then also assign memory
// above both types are not good practice
 let accountType;//if we declare and keep as it is then it will show undefined


console.log(accountEmail);
// accountId=1;
console.log(accountId);
console.table([accountId , accountEmail , accountPass,accountType]);
