"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Robot = exports.MovableCar = exports.ProtectedCat = exports.ProtectedDog = exports.ProtectedAnimal = exports.Teacher = exports.Order = exports.StaticShape = exports.AirConditioner = exports.Fan = exports.Appliance = exports.CardPayment = exports.CashPayment = exports.Stack = exports.Repository = exports.Bike = exports.VehicleCar = exports.PolyCat = exports.PolyDog = exports.PolyAnimal = exports.MathUtil = exports.Logger = exports.Box = exports.Library = exports.Developer = exports.Manager = exports.Employee = exports.Circle = exports.Square = exports.Shape = exports.Fish = exports.Bird = exports.Cat = exports.Dog = exports.BaseAnimal = exports.Account = exports.Product = exports.User = exports.Book = exports.BankAccount = exports.Rectangle = exports.Car = exports.Student = exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
exports.Person = Person;
;
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
exports.Student = Student;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    display() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
exports.Car = Car;
;
class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    area() {
        console.log(`Area = ${this.height * this.width}`);
    }
    perimeter() {
        console.log(`perimeter = ${2 * (this.height + this.width)}`);
    }
}
exports.Rectangle = Rectangle;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(money) {
        console.log(`Deposit ${money}, now Your Balance is = ${this.balance = this.balance + money}`);
    }
    withdraw(money) {
        console.log(`Withdraw ${money}, now Your Balance is = ${this.balance = this.balance - money}`);
    }
}
exports.BankAccount = BankAccount;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    display() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
exports.Book = Book;
class User {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(v) {
        this.name = v;
    }
}
exports.User = User;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class Account {
    constructor(publicField, privateField, readonlyField) {
        this.publicField = publicField;
        this.privateField = privateField;
        this.readonlyField = readonlyField;
    }
    display() {
        console.log(`Public: ${this.publicField}, Private: ${this.privateField}, Readonly: ${this.readonlyField}`);
    }
}
exports.Account = Account;
class BaseAnimal {
    constructor(name) {
        this.name = name;
    }
}
exports.BaseAnimal = BaseAnimal;
class Dog extends BaseAnimal {
    bark() {
        console.log(`${this.name} barks: Woof!`);
    }
}
exports.Dog = Dog;
class Cat extends BaseAnimal {
    meow() {
        console.log(`${this.name} meows: Meow!`);
    }
}
exports.Cat = Cat;
class Bird {
    fly() {
        console.log("Bird is flying.");
    }
}
exports.Bird = Bird;
class Fish {
    swim() {
        console.log("Fish is swimming.");
    }
}
exports.Fish = Fish;
class Shape {
}
exports.Shape = Shape;
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
exports.Square = Square;
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
class Employee {
    constructor(name) {
        this.name = name;
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    manage() {
        console.log(`${this.name} là Quản lý`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    develop() {
        console.log(`${this.name} là Lập trình viên`);
    }
}
exports.Developer = Developer;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    display() {
        console.log("Books:", this.books);
        console.log("Users:", this.users);
    }
}
exports.Library = Library;
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
exports.Box = Box;
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(message);
    }
}
exports.Logger = Logger;
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return a / b;
    }
}
exports.MathUtil = MathUtil;
class PolyAnimal {
    makeSound() {
        console.log("Animal makes a sound.");
    }
}
exports.PolyAnimal = PolyAnimal;
class PolyDog extends PolyAnimal {
    makeSound() {
        console.log("Dog barks.");
    }
}
exports.PolyDog = PolyDog;
class PolyCat extends PolyAnimal {
    makeSound() {
        console.log("Cat meows.");
    }
}
exports.PolyCat = PolyCat;
class VehicleCar {
    drive() {
        console.log("Car is driving.");
    }
}
exports.VehicleCar = VehicleCar;
class Bike {
    drive() {
        console.log("Bike is driving.");
    }
}
exports.Bike = Bike;
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
exports.Repository = Repository;
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.Stack = Stack;
class CashPayment {
    pay(amount) {
        console.log(`Paid ${amount} in cash.`);
    }
}
exports.CashPayment = CashPayment;
class CardPayment {
    pay(amount) {
        console.log(`Paid ${amount} by card.`);
    }
}
exports.CardPayment = CardPayment;
class Appliance {
}
exports.Appliance = Appliance;
class Fan extends Appliance {
    turnOn() {
        console.log("Fan turned on.");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air Conditioner turned on.");
    }
}
exports.AirConditioner = AirConditioner;
class StaticShape {
    static describe() {
        console.log("This is a shape.");
    }
}
exports.StaticShape = StaticShape;
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
}
exports.Order = Order;
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
    }
}
exports.Teacher = Teacher;
class ProtectedAnimal {
    makeSound() {
        console.log("Animal sound.");
    }
}
exports.ProtectedAnimal = ProtectedAnimal;
class ProtectedDog extends ProtectedAnimal {
    makeSound() {
        console.log("Gâu!");
    }
}
exports.ProtectedDog = ProtectedDog;
class ProtectedCat extends ProtectedAnimal {
    makeSound() {
        console.log("Meo!");
    }
}
exports.ProtectedCat = ProtectedCat;
class MovableCar {
    move() {
        console.log("Car moves.");
    }
}
exports.MovableCar = MovableCar;
class Robot {
    move() {
        console.log("Robot moves.");
    }
}
exports.Robot = Robot;
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    display() {
        console.log("Students:", this.students);
        console.log("Teachers:", this.teachers);
    }
}
exports.School = School;
