import { BankAccount, Book, Car, Person, Rectangle, Student, User } from "./LAB1";


//Bai1
console.log('Bai1');
var person = new Person('Huy',20);
person.display();
//Bai2
console.log('Bai2');
var student = new Student('Huy',20,12);
student.display();
//Bai3
console.log('Bai3');
var car = new Car('Audi','Audi1',2000);
car.display();
//Bai4
console.log('Bai4');
var rectangle = new Rectangle(5,2)
rectangle.area();
rectangle.perimeter();
//Bai5
console.log('Bai5');
var bankAccount = new BankAccount(2000)
bankAccount.deposit(200);
bankAccount.withdraw(50);
//Bai6
console.log('Bai6');
var book = new Book('Xin chao','Huy',2012)
book.display()
//Bai7
console.log('Bai7');
var user = new User('Huy');
console.log(`Ten la ${user.getName}`);
user.setName='Nguyen Thanh Huy';
console.log(`Ten la ${user.getName}`);
//Bai8




