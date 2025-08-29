//Bai1
export const myPromise: Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Hello Async');
    }, 2000);
})

//Bai2
export function getNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

//Bai3
export function getError(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Something went wrong');
        }, 1000);
    });
}

//Bai4
export function randNum(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 1000);
    });
}

//Bai5
export function simulateTask(time:number) : Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Task done`);
        }, time);
    }); 
}

//Bai9

export const evenNumber = (array: Array<number>): Promise<Array<number>> => {
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