function delay(duration){
// code here

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), duration)
    })
    return promise
}


function logHi(){
    console.log('Hi');
}

delay(2000).then(logHi);  // prints Hi in console in 2 seconds
