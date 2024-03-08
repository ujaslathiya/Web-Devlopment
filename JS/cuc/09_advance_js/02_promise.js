const promise_1 = new Promise(function (resolve, reject) {

    // Do async task, DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task 1 is complete");
        resolve()
    }, 1000)

})

promise_1.then(function () {
    console.log("Promise 1 consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is complete");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ Username: "ujas lathiya", pass: "ujas@123" });
    }, 1000)
}).then(function (user) {
    console.log(user);
    console.log("Promise 3 consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (error) {
            reject("async task is aborted due to some reasons");
        } else {
            resolve("async task 4 completed succesfully");
        }
    }, 1000)
}).then(function (msg) {
    console.log(msg);
}).catch(function (msg) {
    console.log(msg);
}).finally(function () {
    console.log("promise is either resolved or rejected");
})

const promise_5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (error) {
            reject("Rejected")
        } else {
            resolve("Resolved")
        }
    }, 1000)
});

async function consumePromisefive() {
    try {
        const response_5 = await promise_5;
        console.log(response_5);
    } catch (error) {
        console.log(error);
    }
}

consumePromisefive()

async function getUser(){
    try {
        const data_1 = await fetch('https://api.github.com/users/ujaslathiya');
        const data = await data_1.json();
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}

getUser();