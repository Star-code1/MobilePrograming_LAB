// // LAB1
// import {
//     Person, Student, Car, Rectangle, BankAccount, Book, User, Product,
//     Animal, Account, BaseAnimal, Dog, Cat, Flyable, Swimmable, Bird, Fish,
//     Shape, Square, Circle, Employee, Manager, Developer, Library,
//     Box, Logger, MathUtil, PolyAnimal, PolyDog, PolyCat, Vehicle,
//     VehicleCar, Bike, Repository, Stack, Payment, CashPayment, CardPayment,
//     Appliance, Fan, AirConditioner, StaticShape, Order, Teacher,
//     ProtectedAnimal, ProtectedDog, ProtectedCat, Movable, MovableCar, Robot, School
// } from "./LAB1";

// //Bai1
// console.log('Bai1');
// var person = new Person('Huy',20);
// person.display();

// //Bai2
// console.log('Bai2');
// var student = new Student('Huy',20,12);
// student.display();

// //Bai3
// console.log('Bai3');
// var car = new Car('Audi','Audi1',2000);
// car.display();

// //Bai4
// console.log('Bai4');
// var rectangle = new Rectangle(5,2)
// rectangle.area();
// rectangle.perimeter();

// //Bai5
// console.log('Bai5');
// var bankAccount = new BankAccount(2000)
// bankAccount.deposit(200);
// bankAccount.withdraw(50);

// //Bai6
// console.log('Bai6');
// var book = new Book('Xin chao','Huy',2012)
// book.display()

// //Bai7
// console.log('Bai7');
// var user = new User('Huy');
// console.log(`Ten la ${user.getName}`);
// user.setName='Nguyen Thanh Huy';
// console.log(`Ten la ${user.getName}`);

// //Bai8
// console.log('Bai8');
// const products = [
//     new Product('Product1', 50),
//     new Product('Product2', 150),
//     new Product('Product3', 200)
// ];
// const expensiveProducts = products.filter(p => p.price > 100);
// console.log('Products > 100:', expensiveProducts);

// //Bai9
// console.log('Bai9');
// class DogAnimal implements Animal {
//     name: string = 'Dog';
//     sound(): void {
//         console.log('Gâu!');
//     }
// }
// const animal: Animal = new DogAnimal();
// animal.sound();

// //Bai10
// console.log('Bai10');
// const account = new Account('publicValue', 'privateValue', 'readonlyValue');
// account.display();

// //Bai11
// console.log('Bai11');
// const dog = new Dog('Chó');
// dog.bark();
// const cat = new Cat('Mèo');
// cat.meow();

// //Bai12
// console.log('Bai12');
// const bird = new Bird();
// bird.fly();
// const fish = new Fish();
// fish.swim();

// //Bai13
// console.log('Bai13');
// const square: Shape = new Square(5);
// console.log('Square area:', square.area());
// const circle: Shape = new Circle(3);
// console.log('Circle area:', circle.area());

// //Bai14
// console.log('Bai14');
// const manager = new Manager('A');
// manager.manage();
// const developer = new Developer('B');
// developer.develop();

// //Bai15
// console.log('Bai15');
// const library = new Library();
// library.addBook(new Book('Book1', 'Author1', 2020));
// library.display();

// //Bai16
// console.log('Bai16');
// const stringBox = new Box<string>('Hello');
// console.log(stringBox.getValue());
// const numberBox = new Box<number>(42);
// console.log(numberBox.getValue());

// //Bai17
// console.log('Bai17');
// const logger = Logger.getInstance();
// logger.log('This is a log message.');

// //Bai18
// console.log('Bai18');
// console.log('Add:', MathUtil.add(5, 3));
// console.log('Subtract:', MathUtil.subtract(5, 3));
// console.log('Multiply:', MathUtil.multiply(5, 3));
// console.log('Divide:', MathUtil.divide(5, 3));

// //Bai19
// console.log('Bai19');
// const polyAnimals: PolyAnimal[] = [new PolyDog(), new PolyCat()];
// polyAnimals.forEach(a => a.makeSound());

// //Bai20
// console.log('Bai20');
// const vehicleCar: Vehicle = new VehicleCar();
// vehicleCar.drive();
// const bike: Vehicle = new Bike();
// bike.drive();

// //Bai21
// console.log('Bai21');
// const repo = new Repository<string>();
// repo.add('Item1');
// repo.add('Item2');
// console.log(repo.getAll());

// //Bai22
// console.log('Bai22');
// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// console.log('Peek:', stack.peek());
// console.log('Pop:', stack.pop());
// console.log('Is Empty:', stack.isEmpty());

// //Bai23
// console.log('Bai23');
// const cash: Payment = new CashPayment();
// cash.pay(100);
// const card: Payment = new CardPayment();
// card.pay(200);

// //Bai24
// console.log('Bai24');
// const fan: Appliance = new Fan();
// fan.turnOn();
// const ac: Appliance = new AirConditioner();
// ac.turnOn();

// //Bai25
// console.log('Bai25');
// StaticShape.describe();

// //Bai26
// console.log('Bai26');
// const order = new Order();
// order.addProduct(new Product('Prod1', 50));
// order.addProduct(new Product('Prod2', 150));
// console.log('Total:', order.calculateTotal());

// //Bai27
// console.log('Bai27');
// const teacher = new Teacher('C', 35, 'Toán');
// teacher.introduce();

// //Bai28
// console.log('Bai28');
// const protDog = new ProtectedDog();
// protDog.makeSound();
// const protCat = new ProtectedCat();
// protCat.makeSound();

// //Bai29
// console.log('Bai29');
// const movableCar: Movable = new MovableCar();
// movableCar.move();
// const robot: Movable = new Robot();
// robot.move();

// //Bai30
// console.log('Bai30');
// const school = new School();
// school.addStudent(new Student('Student1', 15, 10));
// school.addTeacher(new Teacher('Teacher1', 40, 'Văn'));
// school.display();

//LAB2

import { evenNumber, getError, getNumber, myPromise, randNum, simulateTask } from "./LAB2";

//Bai1
myPromise.then((result) => {
    console.log('Bài 1');
    console.log(result);
});

//Bai2
getNumber().then((result) => {
    console.log('Bài 2');
    console.log(result);
});

//Bai3
getError().catch((error) => {
    console.log('Bài 3');
    console.log(error);
});

//Bai4
randNum()
.then((value) => {
    console.log('Bài 4');
    console.log('Resolve with value: '+value);
})
.catch((error) => {
    console.log('Bài 4');
    console.log('Reject with error: '+error);
});

//Bai5
simulateTask(2000).then((result) => {
    console.log('Bài 5');
    console.log(result);
}); 

//Bai6
Promise.all(
    [
        simulateTask(1000).then((result) => {
            console.log('Bài 6');
            console.log(result);
        }),
        randNum()
        .then((value) => {
            console.log('Bài 6');
            console.log('Resolve with value: '+value);
        })
        .catch((error) => {
            console.log('Bài 6');
            console.log('Reject with error: '+error);
        }),
        getError().catch((error) => {
        console.log('Bài 6');
        console.log(error);
        })
    ]
);

//Bai7
Promise.race([
    simulateTask(1000),
    randNum(),
    getNumber()
]).then((result) => {
    console.log('Bài 7');
    console.log(result);
});

//Bai8
Promise.resolve(2)
.then(value => {
    return value * value;
})
.then(value => {
    return value * 2;
})
.then(value => {
    return value + 5;
})
.then(value => {
    console.log('Bài 8');
    console.log(value);
})

//Bai9
var arr=[1,2,3,4,5,6,7,8,9,10]
evenNumber(arr).then((result)=>{
    console.log('Bài 9');
    console.log(result);
})

//Bai 10
var arr=[1,2,3,4,5,6,7,8,9,10]
evenNumber(arr).finally(()=>{
    console.log('Bài 10');
    console.log('Done');
} 
)