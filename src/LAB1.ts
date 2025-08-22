export class Person {
    name : string;
    age : number;

    constructor (name : string, age : number) {

        this.name = name;
        this.age = age;

    }

    display() : void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        
    }
};

export class Student extends Person {
    grade : number;

    constructor (name : string, age : number, grade : number ){
        super(name,age);
        this.grade = grade;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
        
    }
}

export class Car {
    brand : string;
    model : string;
    year : number;

    constructor (brand : string, model : string, year : number) {

        this.brand = brand;
        this.model = model;
        this.year = year;

    }

    display() : void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
        
    }
};

export class Rectangle {
    width : number;
    height : number;

    constructor(width : number,height : number){
        this.height = height;
        this.width = width;
    }

    area (): void {
        console.log(`Area = ${this.height*this.width}`);
    }
    perimeter (): void {
        console.log(`perimeter = ${2*(this.height+this.width)}`);
    }
    
}

export class BankAccount {
    balance : number ;

    constructor(balance : number){
        this.balance = balance;
    }

    deposit(money:number) : void {
        console.log(`Deposit ${money}, now Your Balance is = ${this.balance = this.balance + money}`);
    }
    withdraw(money:number) : void {
        console.log(`Withdraw ${money}, now Your Balance is = ${this.balance = this.balance - money}`);
    }
}

export class Book {
    title : string;
    author : string ;
    year : number ;

    constructor (title : string, author : string, year : number){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    display() : void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}

export class User {
    private name : string;

    constructor (name:string){
        this.name = name;
    }
    
    public get getName() : string {
        return this.name
    }
    
    public set setName(v : string) {
        this.name = v;
    }
}