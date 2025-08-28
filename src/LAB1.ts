export class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

export class Student extends Person {
    grade: number;
    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

export class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    display(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
};

export class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;
    }
    area(): void {
        console.log(`Area = ${this.height * this.width}`);
    }
    perimeter(): void {
        console.log(`perimeter = ${2 * (this.height + this.width)}`);
    }
}

export class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(money: number): void {
        console.log(`Deposit ${money}, now Your Balance is = ${this.balance = this.balance + money}`);
    }
    withdraw(money: number): void {
        console.log(`Withdraw ${money}, now Your Balance is = ${this.balance = this.balance - money}`);
    }
}

export class Book {
    title: string;
    author: string;
    year: number;
    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    display(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}

export class User {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public get getName(): string {
        return this.name
    }
    public set setName(v: string) {
        this.name = v;
    }
}

export class Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

export interface Animal {
    name: string;
    sound(): void;
}

export class Account {
    public publicField: string;
    private privateField: string;
    readonly readonlyField: string;
    constructor(publicField: string, privateField: string, readonlyField: string) {
        this.publicField = publicField;
        this.privateField = privateField;
        this.readonlyField = readonlyField;
    }
    display(): void {
        console.log(`Public: ${this.publicField}, Private: ${this.privateField}, Readonly: ${this.readonlyField}`);
    }
}

export class BaseAnimal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class Dog extends BaseAnimal {
    bark(): void {
        console.log(`${this.name} barks: Woof!`);
    }
}

export class Cat extends BaseAnimal {
    meow(): void {
        console.log(`${this.name} meows: Meow!`);
    }
}

export interface Flyable {
    fly(): void;
}

export interface Swimmable {
    swim(): void;
}

export class Bird implements Flyable {
    fly(): void {
        console.log("Bird is flying.");
    }
}

export class Fish implements Swimmable {
    swim(): void {
        console.log("Fish is swimming.");
    }
}

export abstract class Shape {
    abstract area(): number;
}

export class Square extends Shape {
    side: number;
    constructor(side: number) {
        super();
        this.side = side;
    }
    area(): number {
        return this.side * this.side;
    }
}

export class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export class Employee {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} là Quản lý`);
    }
}

export class Developer extends Employee {
    develop(): void {
        console.log(`${this.name} là Lập trình viên`);
    }
}

export class Library {
    books: Book[] = [];
    users: User[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    display(): void {
        console.log("Books:", this.books);
        console.log("Users:", this.users);
    }
}

export class Box<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}

export class Logger {
    private static instance: Logger;
    private constructor() {}
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message: string): void {
        console.log(message);
    }
}

export class MathUtil {
    static add(a: number, b: number): number {
        return a + b;
    }
    static subtract(a: number, b: number): number {
        return a - b;
    }
    static multiply(a: number, b: number): number {
        return a * b;
    }
    static divide(a: number, b: number): number {
        return a / b;
    }
}

export class PolyAnimal {
    makeSound(): void {
        console.log("Animal makes a sound.");
    }
}

export class PolyDog extends PolyAnimal {
    makeSound(): void {
        console.log("Dog barks.");
    }
}

export class PolyCat extends PolyAnimal {
    makeSound(): void {
        console.log("Cat meows.");
    }
}

export interface Vehicle {
    drive(): void;
}

export class VehicleCar implements Vehicle {
    drive(): void {
        console.log("Car is driving.");
    }
}

export class Bike implements Vehicle {
    drive(): void {
        console.log("Bike is driving.");
    }
}

export class Repository<T> {
    items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getAll(): T[] {
        return this.items;
    }
}

export class Stack<T> {
    items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

export interface Payment {
    pay(amount: number): void;
}

export class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} in cash.`);
    }
}

export class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} by card.`);
    }
}

export abstract class Appliance {
    abstract turnOn(): void;
}

export class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan turned on.");
    }
}

export class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Air Conditioner turned on.");
    }
}

export class StaticShape {
    static describe(): void {
        console.log("This is a shape.");
    }
}

export class Order {
    products: Product[] = [];
    addProduct(product: Product): void {
        this.products.push(product);
    }
    calculateTotal(): number {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
}

export class Teacher extends Person {
    subject: string;
    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }
    introduce(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
    }
}

export class ProtectedAnimal {
    protected makeSound(): void {
        console.log("Animal sound.");
    }
}

export class ProtectedDog extends ProtectedAnimal {
    makeSound(): void {
        console.log("Gâu!");
    }
}

export class ProtectedCat extends ProtectedAnimal {
    makeSound(): void {
        console.log("Meo!");
    }
}

export interface Movable {
    move(): void;
}

export class MovableCar implements Movable {
    move(): void {
        console.log("Car moves.");
    }
}

export class Robot implements Movable {
    move(): void {
        console.log("Robot moves.");
    }
}

export class School {
    students: Student[] = [];
    teachers: Teacher[] = [];
    addStudent(student: Student): void {
        this.students.push(student);
    }
    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }
    display(): void {
        console.log("Students:", this.students);
        console.log("Teachers:", this.teachers);
    }
}