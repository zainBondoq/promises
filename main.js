// const myPromise = new Promise(function(resolveFunction, rejectFunction) {
//     let connect = true;

//     if (connect) {
//         resolveFunction("connection established");
//     } else {
//         rejectFunction(Error("connection failed"));
//     }
// }).then(
//     (resolvedValue) => console.log(`good ${resolvedValue}`),
//     (rejectedValue) => console.log(`bad ${rejectedValue}`)
// );


const myPromise = new Promise(function(resolveFunction, rejectFunction) {
     let employees = ["osama" , "ahmad" , "sayyed" , "mahmoud"];
 
     if(employees.length === 4){
        resolveFunction(employees);
     }else{
        rejectFunction(Error("number of employees is not 4"))
     }




});
//     let connect = true;

//     if (connect) {
//         resolveFunction("connection established");
//     } else {
//         rejectFunction(Error("connection failed"));
//     }
// });

// console.log(myPromise); //sync -- will print first
myPromise.then(
    (resolvedValue) => {
        resolvedValue.length = 2;
        return resolvedValue;
    }
);

myPromise.then(
    (resolvedValue) => {
        resolvedValue.length = 1;
        return resolvedValue;
    }
);

myPromise.then(
    (resolvedValue) => {
       console.log(`the choosen employee is ${resolvedValue}`);
    }
).catch((rejectedReason) => console.log(rejectedReason)) .finally(console.log("operation is done"));