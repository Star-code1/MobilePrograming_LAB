"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
