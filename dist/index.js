"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const LAB1_1 = require("./LAB1");
//Bai1
console.log('Bai1');
var person = new LAB1_1.Person('Huy', 20);
person.display();
//Bai2
console.log('Bai2');
var student = new LAB1_1.Student('Huy', 20, 12);
student.display();
//Bai3
console.log('Bai3');
var car = new LAB1_1.Car('Audi', 'Audi1', 2000);
car.display();
//Bai4
console.log('Bai4');
var rectangle = new LAB1_1.Rectangle(5, 2);
rectangle.area();
rectangle.perimeter();
//Bai5
console.log('Bai5');
var bankAccount = new LAB1_1.BankAccount(2000);
bankAccount.deposit(200);
bankAccount.withdraw(50);
//Bai6
console.log('Bai6');
var book = new LAB1_1.Book('Xin chao', 'Huy', 2012);
book.display();
//Bai7
console.log('Bai7');
var user = new LAB1_1.User('Huy');
console.log(`Ten la ${user.getName}`);
user.setName = 'Nguyen Thanh Huy';
console.log(`Ten la ${user.getName}`);
//Bai8
console.log('Bai8');
const products = [
    new LAB1_1.Product('Product1', 50),
    new LAB1_1.Product('Product2', 150),
    new LAB1_1.Product('Product3', 200)
];
const expensiveProducts = products.filter(p => p.price > 100);
console.log('Products > 100:', expensiveProducts);
//Bai9
console.log('Bai9');
class DogAnimal {
    constructor() {
        this.name = 'Dog';
    }
    sound() {
        console.log('Gâu!');
    }
}
const animal = new DogAnimal();
animal.sound();
//Bai10
console.log('Bai10');
const account = new LAB1_1.Account('publicValue', 'privateValue', 'readonlyValue');
account.display();
//Bai11
console.log('Bai11');
const dog = new LAB1_1.Dog('Chó');
dog.bark();
const cat = new LAB1_1.Cat('Mèo');
cat.meow();
//Bai12
console.log('Bai12');
const bird = new LAB1_1.Bird();
bird.fly();
const fish = new LAB1_1.Fish();
fish.swim();
//Bai13
console.log('Bai13');
const square = new LAB1_1.Square(5);
console.log('Square area:', square.area());
const circle = new LAB1_1.Circle(3);
console.log('Circle area:', circle.area());
//Bai14
console.log('Bai14');
const manager = new LAB1_1.Manager('A');
manager.manage();
const developer = new LAB1_1.Developer('B');
developer.develop();
//Bai15
console.log('Bai15');
const library = new LAB1_1.Library();
library.addBook(new LAB1_1.Book('Book1', 'Author1', 2020));
library.display();
//Bai16
console.log('Bai16');
const stringBox = new LAB1_1.Box('Hello');
console.log(stringBox.getValue());
const numberBox = new LAB1_1.Box(42);
console.log(numberBox.getValue());
//Bai17
console.log('Bai17');
const logger = LAB1_1.Logger.getInstance();
logger.log('This is a log message.');
//Bai18
console.log('Bai18');
console.log('Add:', LAB1_1.MathUtil.add(5, 3));
console.log('Subtract:', LAB1_1.MathUtil.subtract(5, 3));
console.log('Multiply:', LAB1_1.MathUtil.multiply(5, 3));
console.log('Divide:', LAB1_1.MathUtil.divide(5, 3));
//Bai19
console.log('Bai19');
const polyAnimals = [new LAB1_1.PolyDog(), new LAB1_1.PolyCat()];
polyAnimals.forEach(a => a.makeSound());
//Bai20
console.log('Bai20');
const vehicleCar = new LAB1_1.VehicleCar();
vehicleCar.drive();
const bike = new LAB1_1.Bike();
bike.drive();
//Bai21
console.log('Bai21');
const repo = new LAB1_1.Repository();
repo.add('Item1');
repo.add('Item2');
console.log(repo.getAll());
//Bai22
console.log('Bai22');
const stack = new LAB1_1.Stack();
stack.push(1);
stack.push(2);
console.log('Peek:', stack.peek());
console.log('Pop:', stack.pop());
console.log('Is Empty:', stack.isEmpty());
//Bai23
console.log('Bai23');
const cash = new LAB1_1.CashPayment();
cash.pay(100);
const card = new LAB1_1.CardPayment();
card.pay(200);
//Bai24
console.log('Bai24');
const fan = new LAB1_1.Fan();
fan.turnOn();
const ac = new LAB1_1.AirConditioner();
ac.turnOn();
//Bai25
console.log('Bai25');
LAB1_1.StaticShape.describe();
//Bai26
console.log('Bai26');
const order = new LAB1_1.Order();
order.addProduct(new LAB1_1.Product('Prod1', 50));
order.addProduct(new LAB1_1.Product('Prod2', 150));
console.log('Total:', order.calculateTotal());
//Bai27
console.log('Bai27');
const teacher = new LAB1_1.Teacher('C', 35, 'Toán');
teacher.introduce();
//Bai28
console.log('Bai28');
const protDog = new LAB1_1.ProtectedDog();
protDog.makeSound();
const protCat = new LAB1_1.ProtectedCat();
protCat.makeSound();
//Bai29
console.log('Bai29');
const movableCar = new LAB1_1.MovableCar();
movableCar.move();
const robot = new LAB1_1.Robot();
robot.move();
//Bai30
console.log('Bai30');
const school = new LAB1_1.School();
school.addStudent(new LAB1_1.Student('Student1', 15, 10));
school.addTeacher(new LAB1_1.Teacher('Teacher1', 40, 'Văn'));
school.display();
