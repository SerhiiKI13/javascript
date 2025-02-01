//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//let array =[];
//for (let i = 0; i < 100; i+=2){
 //  array.push(i);
//}console.log(array);
//        b. заповнити його 50 непарними числами за допомоги циклу.
//let array = [];
//for (let i =1; i < 100; i+=2){
//    array.push(i);
//}
//console.log(array);
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//let array = [];
//for (let i = 0; i < 20; i++){
 //   let randomNumber = Math.floor(Math.random() * 101);
 //   array.push(randomNumber);
//}
//console.log(array);

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//let array = [];

//for (let i = 0; i < 20; i++) { let randomNumber = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
 //   array.push(randomNumber);
//}
//console.log(array)
//2. Вивести за допомогою console.log кожен третій елемен
//for (let i = 0; i <array.length; i++){
 //   if ([i] % 3 === 0){
//        console.log(array[i]);
 //   }
//}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//for (let i = 0; i < array.length; i++){
//    if ([i] % 3 === 0 && array[i] % 2 === 0){
 //       console.log(array[i]);
//    }
//}
//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//let array = [];
// for (let i = 0; i < 20; i++){
//     let randomNumber = Math.floor(Math.random() * (732-8+1))+8;
//     array.push(randomNumber);
// }
// let arr = [];
// for (let i = 0; i < array.length; i++){
//     if (i % 3 === 0 && array[i] % 2 === 0){
//         arr.push(array[i]);
//     }
// }
// console.log(arr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array.length - 1; i++){
//     if (array[i + 1] % 2 === 0){
//         console.log(array[i]);
//     }
// }

// Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//let prices = [100,250,50,168,120,345,188];
// let sum = 0;
// for (price of prices){
//     sum += price;
// }
// let result = sum / prices.length;
// console.log(result);

//Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//let arr =[];
// let arrMulti = [];
// for (let i = 0; i < 10; i++){
//     let randomNumber = Math.floor(Math.random() * (732 - 8 +1))+8;
//     arr.push(randomNumber);
//     arrMulti.push(randomNumber * 5);
// }
// console.log(arr);
// console.log(arrMulti);
//Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
////Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = ['hello',43,'ette',564,false,43,true,'ada',67,908];
// let numbes =[];
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === "number"){
//         numbes.push(arr[i]);
//     }
// }
// console.log(arr);
// console.log(numbes);

//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//      {id: 1, name: 'vasya', age: 31, status: false},
//      {id: 2, name: 'petya', age: 30, status: true},
//      {id: 3, name: 'kolya', age: 29, status: true},
//      {id: 4, name: 'olya', age: 28, status: false}
//  ];
//
//  let citiesWithId = [
//      {user_id: 3, country: 'USA', city: 'Portland'},
//      {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//      {user_id: 2, country: 'Poland', city: 'Krakow'},
//      {user_id: 4, country: 'USA', city: 'Miami'}
//  ];
// let userList =[];
// for (let i = 0;i < usersWithId.length; i++){
//     let user = usersWithId[i];
//     for (let a = 0; a < citiesWithId.length; a++){
//         if (citiesWithId[a].user_id === user.id){
//             user.address = citiesWithId[a];
//         }
//     }
//     userList.push(user);
// }
// console.log(userList);

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//let numbers =[100,250,50,168,120,345,188,89,95,10];
// for (let i = 0; i <numbers.length;i++){
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//     }
// }

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//let numbers =[100,250,50,168,120,345,188,89,95,10];
// let numbersArray = [];
// for (let i = 0; i < numbers.length; i++){
//     numbersArray.push(numbers[i]);
// }
// console.log(numbers);
// console.log(numbersArray);

//
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//let arr =[ 'a', 'b', 'c'];
// let words ='';
// for (let i = 0; i < arr.length; i++){
//     words+= arr[i];
// }
// console.log(words);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//let arr =[ 'a', 'b', 'c'];
//  let words ='';
//  let i = 0;
//  while(i<arr.length){
//      words+=arr[i];
//      i++;
//  }
//  console.log(words);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr =[ 'a', 'b', 'c'];
let words ='';
for (let letter of arr){
    words += letter;
}
console.log(words);


