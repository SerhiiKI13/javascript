let variable1 = 'hello';
let variable2 = 'owu';
let variable3 = 'com';
let variable4 = 'ua';
let variableNumber = 1;
let variableNumber1 = 10;
let variableNumber2 = -999;
let variableNumber3 = 123;
let Pi = 3.14;
let variableNumber4 = 2.7;
let variableNumber5 = 16;
let variableBoolean = true;
let variableBoolean1 = false;
console.log(variable1);
console.log(variable2);
console.log(variable3);
console.log(variable4);
console.log(variableNumber);
console.log(variableNumber1);
console.log(variableNumber2);
console.log(variableNumber3);
console.log(Pi);
console.log(variableNumber4);
console.log(variableNumber5);
console.log(variableBoolean);
console.log(variableBoolean1);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Kuhai';
let middleName = 'Serhii';
let lastName = 'igorovoch';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль. let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

//Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Name');
let middle = prompt('middleName');
let age = prompt('age');
console.log(name);
console.log(middle);
console.log(age);
