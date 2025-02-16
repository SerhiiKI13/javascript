// // #XjJuucOMR0
// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const users =[
//     new User(1, 'Serhii', 'ThirteeN', 'kugai.sirozha@icloud.com', '+38097633765'),
//     new User(2, 'Kolya', 'Schevchenko', 'kalyankokos@icloud.com', '+3809763453765'),
//     new User(3, 'Igor', 'Lysenko', 'igor_cat@icloud.com', '+38097633343'),
//     new User(4, 'Yulia', 'Dovzenko', 'yulia_write@icloud.com', '+38097633785'),
//     new User(5, 'Katya', 'Kononenko', 'kugai.sirozha@icloud.com', '+38097667765'),
//     new User(6, 'Nikita', 'Tsfewe', 'asassirozha@icloud.com', '+38097633765'),
//     new User(7, 'Mark', 'Tvbc', 'dsfsdsirozha@icloud.com', '+38097633765'),
//     new User(8, 'Neo', 'Vcxcxx', 'kudsfdsfha@icloud.com', '+38097633765'),
//     new User(9, 'Frodo', 'Asfdfd', 'kugdsfdsozha@icloud.com', '+38097633765'),
//     new User(10, 'Dasha', 'Asdasd', 'ksadsdozha@icloud.com', '+38097633765')
// ]
// console.log(users)
//
//
//
// //
// // #2ikXsE2WiKZ
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter(value => value.id % 2 === 0));
//
// //
// // #pOeHKct
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));
//
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client(id, name, surname, email, phone, order){
//     this.id = id;
//      this.name = name;
//      this.surname = surname;
//      this.email = email;
//      this.phone = phone;
//      this.order = order;
// }
//
// const clients = [
//     new Client(1, 'Serhii', 'Thirteen', 'serhii1@gmail.com', '+3806987471', ['Tv', 'laptop', 'phone']),
//     new Client(2, 'Lina', 'Smith', 'lina2@gmail.com', '+3806987472', ['Tv', 'tablet', 'phone']),
//     new Client(3, 'Denis', 'Johnson', 'denis3@gmail.com', '+3806987473', ['Tv', 'phone']),
//     new Client(4, 'Radio', 'Doe', 'radio4@gmail.com', '+3806987474', ['Tv', 'laptop']),
//     new Client(5, 'Liza', 'Brown', 'liza5@gmail.com', '+3806987475', ['laptop', 'phone']),
//     new Client(6, 'Serhii', 'Davis', 'serhii6@gmail.com', '+3806987476', ['Tv', 'laptop', 'MacBook', 'phone']),
//     new Client(7, 'Katya', 'Wilson', 'katya7@gmail.com', '+3806987477', ['Tv']),
//     new Client(8, 'Maks', 'Taylor', 'maks8@gmail.com', '+3806987478', ['Tv', 'laptop']),
//     new Client(9, 'Nikita', 'Anderson', 'nikita9@gmail.com', '+3806987479', ['Tv', 'laptop', 'phone', 'Smartwatch']),
//     new Client(10, 'Kolya', 'Martinez', 'kolya10@gmail.com', '+3806987470', ['Laptop', 'Tablet'])
// ];
//
// //
// //
// // #8abtVjRv
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a, b) => a.order.length - b.order.length));
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufacturer, year, maxSpeed, engineCapacity){
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//         this.drive = function (){
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//         }
//         this.info = function (){
//            for (const key in this){
//                console.log(key,this[key]);
//            }
//         };
//         this.increaseMaxSpeed = function (newSpeed){
//             if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//         }
//         this.changeYear = function (newValue){
//             if (newValue > 1900){
//                 this.year = newValue
//             }
//         };
//     this.addDriver = function (driver){
//     this.driver = driver;
//     }
// }
// const car1 = new Car("Model S", "Tesla", 2022, 250, 2.0);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(122);
//  car1.changeYear(1901);
// car1.addDriver({name: 'Serhii', age: 21});
// console.log(car1);

//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
// constructor(model, manufacturer, year, maxSpeed, engineCapacity){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
// }
//     drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info = function (){
//         for (const key in this){
//             console.log(key,this[key]);
//         }
//     };
//    increaseMaxSpeed = function (newSpeed){
//         if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//    changeYear = function (newValue){
//         if (newValue > 1900){
//             this.year = newValue
//         }
//     };
//     addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// const car1 = new Car("Model S", "Tesla", 2022, 250, 2.0);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(122);
// car1.changeYear(1901);
// car1.addDriver({name: 'Serhii', age: 21});
// console.log(car1);
//
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let cinderellas = [
//     new Cinderella('cinderella1', 23, 34),
//     new Cinderella('cinderella2', 25, 35),
//     new Cinderella('cinderella3', 21, 36),
//     new Cinderella('cinderella4', 27, 37),
//     new Cinderella('cinderella5', 24, 38),
//     new Cinderella('cinderella6', 20, 39),
//     new Cinderella('cinderella7', 19, 40),
//     new Cinderella('cinderella8', 28, 41),
//     new Cinderella('cinderella9', 34, 42),
//     new Cinderella('cinderella10', 22, 43),
// ];
// class Prince {
//     constructor(name, age, shoeHeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeHeFound = shoeHeFound;
//     }
// }
// const prince = new Prince('Dean', 24, 36);

// for (let i = 0; i < cinderellas.length; i++){
//     if (cinderellas[i].footSize === prince.shoeHeFound){
//        console.log(cinderellas[i]);
//        prince.wife = cinderellas[i];
//     }
//
// }
// console.log(prince);

// let find = cinderellas.find(value => value.footSize === prince.shoeHeFound)
// prince.wife = find;
// console.log(prince)

//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
//Я это подсматривал у решениях у Сергея
// Array.prototype.MyForEach= function (callback){
//     for (const item of this){
//         callback(item);
//     }
// }
// let numbers = [11,22,23,24];
// numbers.MyForEach((num) => console.log(num));

// Array.prototype.myFilter = function (callback) {
//     let arr = [];
//     for (const callbackKey of this) {
//         if (callback(callbackKey)){
//             arr.push(callbackKey);
//         }
//     }
//     return arr;
// }
// let numbers = [11,22,23,24];
// console.log(numbers.myFilter((value) => value % 2 === 0));