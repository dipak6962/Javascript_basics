const promiseOne=new Promise(function (resolve,reject) {
    //Do an async task
    //DB calls,cryptography ,network
    setTimeout(()=>{
        
        console.log("Async task 1")
        resolve("Async 1 is resolved")
       
    },1000)

    
})

promiseOne.then((r)=>{
    console.log(r);
})

new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log("async task 2")
        resolve()
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
})

const promiseThree=new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username:'chai',email:'chai@gmail.com'})
    },1000)
})

promiseThree.then(function name(r) {
    console.log(r);
})

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(function () {
        let error=false;
        if(!error){
            resolve({username:'chai',email:'chai@gmail.com'})
        }
        else {
            reject('Error : something is went wrong')
        }
        
    },1000)
})

promiseFour.then(function (message) {
    // console.log(message);
    return message.username;
}).then(function (username) {
    console.log(username);
}).catch(function (message) {
    console.log(message);
})
// .finally(()=>console.log("finally is always run ");)

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function () {
        let error=true;
        if(!error){
            resolve({username:'hitesh',email:'chai@gmail.com'})
        }
        else {
            reject('Error : JS is went wrong')
        }
        
    },1000)
})

async function consumePromiseFive() {
    try {
    const response=await promiseFive
    console.log(" hey bro ");
    console.log(response)
  }
  catch(error){
    console.log(error)
  }
}

consumePromiseFive()

//consuming promises

async function getAllUsers() {
  try{  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const data =await response.json()
   console.log( data)}
   catch(error){
        console.log(error);
   }
}
getAllUsers()





fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    const data=response.json();
    // return data;
    // console.log(data);
    
    return data;
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})