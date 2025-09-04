//Bai1
export const myPromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});

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
      reject("Something went wrong");
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
export function simulateTask(time: number): Promise<string> {
  return new Promise((resolve, reject) => {
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

//Bai11
export async function myAsyncFunction(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 1000);
  });
}

//Bai12
export async function asyncSimulateTask(): Promise<void> {
  const result = await simulateTask(2000);
  console.log("Bài 12\n", result);
}

//Bai13
export async function asyncTryCatch(): Promise<void> {
  try {
    console.log("Bài 13");

    throw new Error("Something went wrong");
  } catch (error) {
    console.error("Error:", error);
  }
}

//Bai14
export async function async3times(params: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(params * 3);
    }, 1000);
  });
}

//Bai15
export async function asyncSequentially(): Promise<void> {
  console.log("Bài 15");
  const result1 = await asyncSimulateTask();
  const result2 = await asyncTryCatch();
}

//Bai16
export async function asyncAllPromises(): Promise<void> {
  console.log("Bài 16");
  const results = await Promise.all([
    simulateTask(1000),
    randNum(),
    getNumber(),
  ]);
  console.log(results);
}

//Bai17
export async function asyncForOf(): Promise<void> {
  const promises = [
    { name: "simulateTask(1000)", promise: simulateTask(1000) },
    { name: "randNum()", promise: randNum() },
    { name: "getNumber()", promise: getNumber() },
  ];

  console.log("Bài 17");
  for (const { name, promise } of promises) {
    const result = await promise;
    console.log(`Result for ${name}: ${result}`);
  }
}

//Bai18
export async function fetchUser(
  id: number
): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: `User${id}` });
    }, 1000);
  });
}

//Bai19
export async function fetchUsers(
  ids: number[]
): Promise<{ id: number; name: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = ids.map((id) => ({ id: id, name: `User${id}` }));
      resolve(users);
    }, 1000);
  });
}

//Bai20
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  if (ms > 2000) {
    return Promise.reject(new Error("Timeout must not exceed 2000ms"));
  }

  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), ms)
    ),
  ]);
}

//Add hàm bài 20 cho bài 18
export async function fetchWithTimeout(
  id: number,
  timeout: number
): Promise<{ id: number; name: string }> {
  return withTimeout(fetchUser(id), timeout);
}

//Bai21
export async function dataFromPublicAPI(): Promise<void> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log("API result:", data);
}

//Bai22
export async function callMultipleAPI(): Promise<void> {
  for (let i = 1; i <= 3; i++) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    console.log(await res.json());
  }
}

//Bai23
export async function callCompletedTodosAPI(): Promise<void> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: any[] = await res.json();
  const completed = todos.filter((t) => t.completed);
  console.log("Completed todos:", completed);
}

// Bai24
export async function postData(): Promise<void> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
  });
  console.log("Post response:", await res.json());
}

// Bai25
export async function downloadFile(fileName: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Downloading ${fileName}...`);
    setTimeout(() => {
      console.log(`Download of ${fileName} complete!`);
      resolve();
    }, 3000);
  });
}

// Bai26
export async function wait5Seconds(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Waited 5 seconds!");
}

// Bai27
export async function fetchWithRetry(
  url: string,
  retries: number
): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed");
      return await res.json();
    } catch (err) {
      console.warn(`Retry ${i + 1}/${retries} failed`);
      if (i === retries - 1) throw err;
    }
  }
}

// Bai28
async function mockTask(id: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Task ${id} done`), 1000)
  );
}
export async function batchProcess(): Promise<void> {
  const tasks = [1, 2, 3, 4, 5].map((id) => mockTask(id));
  const results = await Promise.all(tasks);
  console.log("Batch results:", results);
}

// Bai29
export async function queueProcess(): Promise<void> {
  for (let i = 1; i <= 5; i++) {
    const res = await mockTask(i);
    console.log("Queue result:", res);
  }
}

// Bai30
export async function fetchMultipleAPIs(): Promise<void> {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/invalid", // lỗi
    "https://jsonplaceholder.typicode.com/todos/3",
  ];
  const results = await Promise.allSettled(
    urls.map((url) => fetch(url).then((r) => r.json()))
  );
  results.forEach((r, i) => {
    if (r.status === "fulfilled") {
      console.log(`API ${i + 1} success:`, r.value);
    } else {
      console.log(`API ${i + 1} failed:`, r.reason);
    }
  });
}
