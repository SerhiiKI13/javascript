//Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//let s = (a,b)=> a * b;
// console.log(s(11,22));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//let s = (r)=> Math.PI * r * r;
// console.log(s(64));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//let s =(h,r) => 2 * Math.PI * r *(h + r);
// console.log(s(16,4));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
//let text = (txt)=>{
//     for (let i = 0;i < txt.length;i++){
//         console.log(txt[i]);
//     }
// }
// let strings = ['hello','okten','welcome','owu','javascript'];
// text(strings);
// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//let text = (txt)=>{
//     document.write(`<p>${txt}</p>`);
// }
// text('welcome');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//let text = (txt)=>{
//     document.write(`<ul>`);
//     document.write(`
// <li>${txt}</li>
// <li>${txt}</li>
// <li>${txt}</li>
// `);
//     document.write(`</ul>`);
// }
// text('welcome my friend');
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//let text = (txt, number)=>{
//     document.write(`<ul>`);
//     for (let i = 0;i <number;i++){
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`);
// }
// text('how are you?', 10);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//let  text = (txt)=>{
//     document.write(`<ul>`);
//     for (let i = 0;i < txt.length; i++ ){
//         document.write(`<li>${txt[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// let mixedArray = [42, 'hello', true, 3.14, 'world', false, 100, 'JavaScript'];
// text(mixedArray);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//const arr = (users) =>{
//     for (let i = 0; i < users.length;i++){
//         document.write(`
// <div>
// <p>${users[i].id}</p>
// <p>${users[i].name}</p>
// <p>${users[i].age}</p>
//  <hr>
//  </div>
// `);
//     }
// }
// let users = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 }
// ];
// arr(users);





// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
//let numbers = [10, 5, 8, 3, 15, 2, 7];
// let minNumber = (min)=>{
//     let num = min[0];
//     for (let i = 1; i < min.length;i++){
//         if (min[i] < num){
//             num = min[i];
//         }
//     }
//     return num;
// }
// console.log(minNumber(numbers));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sum = (arr) =>{
//     let total = 0;
//     for (let i = 0; i < arr.length;i++){
//         total += arr[i];
//     }
//     return total;
// }
//
// console.log(  sum([1,2,10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//let swap = (arr,index1,index2) =>{
//     let save = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = save;
//     return arr;
// }
// console.log(swap([11,22,33,44],1,1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

//let exchange = (sumUAH,currencyValues,exchangeCurrency)=>{
//     let exchangeRate = 0;
//     for (let i = 0; i < currencyValues.length;i++){
//         if (currencyValues[i].currency === exchangeCurrency){
//             exchangeRate = currencyValues[i].value;
//         }
//     }
//     return exchangeRate > 0 ?  sumUAH / exchangeRate : 'Валюти не знайдено';
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));