"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenNumber = exports.myPromise = void 0;
exports.getNumber = getNumber;
exports.getError = getError;
exports.randNum = randNum;
exports.simulateTask = simulateTask;
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
