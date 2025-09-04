// index.ts
import {
    Person, Student, Car, Rectangle, BankAccount, Book, User, Product,
    Animal, Account, Dog, Cat, Bird, Fish, Shape, Square, Circle,
    Manager, Developer, Library, Box, Logger, MathUtil, PolyAnimal,
    PolyDog, PolyCat, Vehicle, VehicleCar, Bike, Repository, Stack,
    Payment, CashPayment, CardPayment, Appliance, Fan, AirConditioner,
    StaticShape, Order, Teacher, ProtectedDog, ProtectedCat,
    Movable, MovableCar, Robot, School
} from "./LAB1";

import {
    async3times, asyncAllPromises, asyncForOf, asyncSequentially, asyncSimulateTask,
    asyncTryCatch, batchProcess, callCompletedTodosAPI, callMultipleAPI,
    dataFromPublicAPI, downloadFile, evenNumber, fetchMultipleAPIs,
    fetchUser, fetchUsers, fetchWithRetry, fetchWithTimeout,
    getError, getNumber, myAsyncFunction, myPromise,
    postData, queueProcess, randNum, simulateTask, wait5Seconds
} from "./LAB2";

async function main() {
    // //LAB1
    // console.log('Bài 1'); new Person('Huy',20).display();
    // console.log('Bài 2'); new Student('Huy',20,12).display();
    // console.log('Bài 3'); new Car('Audi','Audi1',2000).display();
    // console.log('Bài 4'); new Rectangle(5,2).area(); new Rectangle(5,2).perimeter();
    // console.log('Bài 5'); let acc = new BankAccount(2000); acc.deposit(200); acc.withdraw(50);
    // console.log('Bài 6'); new Book('Xin chao','Huy',2012).display();
    // console.log('Bài 7'); let user = new User('Huy'); console.log(user.getName); user.setName = 'Nguyen Thanh Huy'; console.log(user.getName);
    // console.log('Bài 8'); console.log([new Product('P1',50),new Product('P2',150),new Product('P3',200)].filter(p=>p.price>100));
    // console.log('Bài 9'); new Dog('Dog').bark();
    // console.log('Bài 10'); new Account('pub','priv','ro').display();
    // console.log('Bài 11'); new Dog('Chó').bark(); new Cat('Mèo').meow();
    // console.log('Bài 12'); new Bird().fly(); new Fish().swim();
    // console.log('Bài 13'); console.log('Square:', new Square(5).area()); console.log('Circle:', new Circle(3).area());
    // console.log('Bài 14'); new Manager('A').manage(); new Developer('B').develop();
    // console.log('Bài 15'); let lib = new Library(); lib.addBook(new Book('Book1','Author1',2020)); lib.display();
    // console.log('Bài 16'); console.log(new Box<string>('Hello').getValue(), new Box<number>(42).getValue());
    // console.log('Bài 17'); Logger.getInstance().log('Singleton logger message');
    // console.log('Bài 18'); console.log(MathUtil.add(5,3), MathUtil.subtract(5,3), MathUtil.multiply(5,3), MathUtil.divide(5,3));
    // console.log('Bài 19'); [new PolyDog(), new PolyCat()].forEach(a=>a.makeSound());
    // console.log('Bài 20'); new VehicleCar().drive(); new Bike().drive();
    // console.log('Bài 21'); let repo = new Repository<string>(); repo.add('Item1'); repo.add('Item2'); console.log(repo.getAll());
    // console.log('Bài 22'); let st = new Stack<number>(); st.push(1); st.push(2); console.log(st.peek(), st.pop(), st.isEmpty());
    // console.log('Bài 23'); new CashPayment().pay(100); new CardPayment().pay(200);
    // console.log('Bài 24'); new Fan().turnOn(); new AirConditioner().turnOn();
    // console.log('Bài 25'); StaticShape.describe();
    // console.log('Bài 26'); let order = new Order(); order.addProduct(new Product('P1',50)); order.addProduct(new Product('P2',150)); console.log(order.calculateTotal());
    // console.log('Bài 27'); new Teacher('C',35,'Toán').introduce();
    // console.log('Bài 28'); new ProtectedDog().makeSound(); new ProtectedCat().makeSound();
    // console.log('Bài 29'); new MovableCar().move(); new Robot().move();
    // console.log('Bài 30'); let school = new School(); school.addStudent(new Student('S1',15,10)); school.addTeacher(new Teacher('T1',40,'Văn')); school.display();

    //LAB2
    //A. Basics with Promise
    console.log('Bài 1'); console.log(await myPromise);
    console.log('Bài 2'); console.log(await getNumber());
    console.log('Bài 3'); try { await getError(); } catch(e) { console.log(e); }
    console.log('Bài 4'); try { console.log(await randNum()); } catch(e) { console.log(e); }
    console.log('Bài 5'); console.log(await simulateTask(2000));
    console.log('Bài 6'); await Promise.all([simulateTask(1000), randNum().catch(e=>e), getError().catch(e=>e)]).then(r=>console.log(r));
    console.log('Bài 7'); console.log(await Promise.race([simulateTask(1000), randNum(), getNumber()]));
    console.log('Bài 8'); let val = await Promise.resolve(2).then(v=>v*v).then(v=>v*2).then(v=>v+5); console.log(val);
    console.log('Bài 9'); console.log(await evenNumber([1,2,3,4,5,6,7,8,9,10]));
    console.log('Bài 10'); await evenNumber([1,2,3,4,5,6,7,8,9,10]).finally(()=>console.log("Done"));

    //B. Async/Await
    console.log('Bài 11'); console.log(await myAsyncFunction());
    console.log('Bài 12'); await asyncSimulateTask();
    console.log('Bài 13'); await asyncTryCatch();
    console.log('Bài 14'); console.log(await async3times(5));
    console.log('Bài 15'); await asyncSequentially();
    console.log('Bài 16'); await asyncAllPromises();
    console.log('Bài 17'); await asyncForOf();
    console.log('Bài 18'); console.log(await fetchUser(1));
    console.log('Bài 19'); console.log(await fetchUsers([1,2,3]));
    console.log('Bài 20'); try { console.log(await fetchWithTimeout(1,1000)); } catch(e) { console.log(e); }

    //C. Fetch API & Simulated I/O 
    console.log('Bài 21'); await dataFromPublicAPI();
    console.log('Bài 22'); await callMultipleAPI();
    console.log('Bài 23'); await callCompletedTodosAPI();
    console.log('Bài 24'); await postData();
    console.log('Bài 25'); await downloadFile("myfile.txt");
    console.log('Bài 26'); await wait5Seconds();
    console.log('Bài 27'); try { console.log(await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1",3)); } catch(e){ console.log(e); }
    console.log('Bài 28'); await batchProcess();
    console.log('Bài 29'); await queueProcess();
    console.log('Bài 30'); await fetchMultipleAPIs();
}

main();
