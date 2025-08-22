"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Book = exports.BankAccount = exports.Rectangle = exports.Car = exports.Student = exports.Person = void 0;
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
