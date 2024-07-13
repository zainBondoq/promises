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
    let connect = true;

    if (connect) {
        resolveFunction("connection established");
    } else {
        rejectFunction(Error("connection failed"));
    }
});

console.log(myPromise); //sync -- will print first
myPromise.then(
    (resolvedValue) => console.log(`good ${resolvedValue}`),
    (rejectedValue) => console.log(`bad ${rejectedValue}`)
)