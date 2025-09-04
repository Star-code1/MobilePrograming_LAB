"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenNumber = exports.myPromise = void 0;
exports.getNumber = getNumber;
exports.getError = getError;
exports.randNum = randNum;
exports.simulateTask = simulateTask;
exports.myAsyncFunction = myAsyncFunction;
exports.asyncSimulateTask = asyncSimulateTask;
exports.asyncTryCatch = asyncTryCatch;
exports.async3times = async3times;
exports.asyncSequentially = asyncSequentially;
exports.asyncAllPromises = asyncAllPromises;
exports.asyncForOf = asyncForOf;
exports.fetchUser = fetchUser;
exports.fetchUsers = fetchUsers;
exports.fetchWithTimeout = fetchWithTimeout;
exports.dataFromPublicAPI = dataFromPublicAPI;
exports.callMultipleAPI = callMultipleAPI;
exports.callCompletedTodosAPI = callCompletedTodosAPI;
exports.postData = postData;
exports.downloadFile = downloadFile;
exports.wait5Seconds = wait5Seconds;
exports.fetchWithRetry = fetchWithRetry;
exports.batchProcess = batchProcess;
exports.queueProcess = queueProcess;
exports.fetchMultipleAPIs = fetchMultipleAPIs;
//Bai1
exports.myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello Async');
    }, 2000);
});
//Bai2
function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
//Bai3
function getError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Something went wrong');
        }, 1000);
    });
}
//Bai4
function randNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 1000);
    });
}
//Bai5
function simulateTask(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task done`);
        }, time);
    });
}
//Bai9
const evenNumber = (array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let arr = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    arr.push(array[i]);
                }
            }
            resolve(arr);
        }, 1000);
    });
};
exports.evenNumber = evenNumber;
//Bai11
async function myAsyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello Async');
        }, 1000);
    });
}
//Bai12
async function asyncSimulateTask() {
    const result = await simulateTask(2000);
    console.log('Bài 12\n', result);
}
//Bai13
async function asyncTryCatch() {
    try {
        console.log('Bài 13');
        throw new Error('Something went wrong');
    }
    catch (error) {
        console.error('Error:', error);
    }
}
//Bai14
async function async3times(params) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(params * 3);
        }, 1000);
    });
}
//Bai15
async function asyncSequentially() {
    console.log('Bài 15');
    const result1 = await asyncSimulateTask();
    const result2 = await asyncTryCatch();
}
//Bai16
async function asyncAllPromises() {
    console.log('Bài 16');
    const results = await Promise.all([
        simulateTask(1000),
        randNum(),
        getNumber()
    ]);
    console.log(results);
}
//Bai17
async function asyncForOf() {
    const promises = [
        { name: "simulateTask(1000)", promise: simulateTask(1000) },
        { name: "randNum()", promise: randNum() },
        { name: "getNumber()", promise: getNumber() }
    ];
    console.log('Bài 17');
    for (const { name, promise } of promises) {
        const result = await promise;
        console.log(`Result for ${name}: ${result}`);
    }
}
//Bai18
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: `User${id}` });
        }, 1000);
    });
}
//Bai19
async function fetchUsers(ids) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = ids.map(id => ({ id: id, name: `User${id}` }));
            resolve(users);
        }, 1000);
    });
}
//Bai20
function withTimeout(promise, ms) {
    if (ms > 2000) {
        return Promise.reject(new Error("Timeout must not exceed 2000ms"));
    }
    return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), ms)),
    ]);
}
//Add hàm bài 20 cho bài 18
async function fetchWithTimeout(id, timeout) {
    return withTimeout(fetchUser(id), timeout);
}
//Bai21
async function dataFromPublicAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log("API result:", data);
}
//Bai22 
async function callMultipleAPI() {
    for (let i = 1; i <= 3; i++) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
        console.log(await res.json());
    }
}
//Bai23
async function callCompletedTodosAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    const completed = todos.filter((t) => t.completed);
    console.log("Completed todos:", completed);
}
// Bai 24
async function postData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
    });
    console.log("Post response:", await res.json());
}
// Bai 25
async function downloadFile(fileName) {
    return new Promise((resolve) => {
        console.log(`Downloading ${fileName}...`);
        setTimeout(() => {
            console.log(`Download of ${fileName} complete!`);
            resolve();
        }, 3000);
    });
}
// Bai 26
async function wait5Seconds() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Waited 5 seconds!");
}
// Bai 27
async function fetchWithRetry(url, retries) {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok)
                throw new Error("Failed");
            return await res.json();
        }
        catch (err) {
            console.warn(`Retry ${i + 1}/${retries} failed`);
            if (i === retries - 1)
                throw err;
        }
    }
}
// Bai 28
async function mockTask(id) {
    return new Promise((resolve) => setTimeout(() => resolve(`Task ${id} done`), 1000));
}
async function batchProcess() {
    const tasks = [1, 2, 3, 4, 5].map((id) => mockTask(id));
    const results = await Promise.all(tasks);
    console.log("Batch results:", results);
}
// Bai 29
async function queueProcess() {
    for (let i = 1; i <= 5; i++) {
        const res = await mockTask(i);
        console.log("Queue result:", res);
    }
}
// Bai 30
async function fetchMultipleAPIs() {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/invalid", // lỗi
        "https://jsonplaceholder.typicode.com/todos/3",
    ];
    const results = await Promise.allSettled(urls.map((url) => fetch(url).then((r) => r.json())));
    results.forEach((r, i) => {
        if (r.status === "fulfilled") {
            console.log(`API ${i + 1} success:`, r.value);
        }
        else {
            console.log(`API ${i + 1} failed:`, r.reason);
        }
    });
}
