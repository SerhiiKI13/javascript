//#I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//function s(a,b){
//     return  a * b;
// }
// console.log(s(20,15));


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//function s(r){
//     return Math.PI * r * r;
// }
// console.log(s(7));



// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//function s(h,radius){
//     return 2 * Math.PI * radius * (h + radius);
// }
// console.log(s(16,4));


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
//function arr(array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// let strings = ['hello','okten','welcome','owu','javascript'];
// arr(strings);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
//function txt(text){
//     document.write(`<div><p>${text}</p></div>`);
// }
// txt('hello');




// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
//function txt(text){
//     document.write(`
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>
// `)
// }
// txt('Java');


// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//function textNumbers(text,li){
//     document.write(`<ul>`);
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
//
//
// textNumbers('ada',10);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write let mixed = [1, 'hello', true, 42, 'world', false];
//function text(arr){
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++){
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// let mixed = [1, 'hello', true, 42, 'world', false];
// text(mixed);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//function userList(users){
//     for (let i = 0; i < users.length; i++){
//         document.write(`<div>
// <p>id: ${users[i].id}</p>
// <p>name: ${users[i].name}</p>
// <p>age: ${users[i].age}</p>
// <hr>
// </div>`)
//     }
// }
// let users = [
//     {id: 1, name: 'John', age: 25},
//     {id: 2, name: 'Jane', age: 30},
//     {id: 3, name: 'Mike', age: 35},
//     {id: 4, name: 'Emma', age: 28},
//     {id: 5, name: 'Chris', age: 40}
// ];
// userList(users);

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
//function number(arr){
//    let min = arr[0];
//    for (let i = 1;i < arr.length;i++){
//        if (arr[i] < min){
//            min = arr[i];
//        }
//    }
//    return min;
// }
// let numbers = [10, 5, 8, 3, 15, 2, 7];
// console.log(number(numbers));


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//function sum(arr){
//     let total = 0;
//     for (let i = 0; i < arr.length;i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(sum([1,2,10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//function swap(arr,index1,index2){
//     let save = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = save;
//     return arr;
// }
// let numbers = [11, 22, 33, 44];
// console.log(swap(numbers,0,1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let exchangeRate = 0;
    for (let i = 0; i <currencyValues.length; i++){
        if (currencyValues[i].currency === exchangeCurrency){
            exchangeRate = currencyValues[i].value;
        }
    }
    if (exchangeRate > 0){
        return sumUAH / exchangeRate;
    } else {
        return 'Pidor';
    }
}
console.log(exchange(10000,[{currency:'EUR',value:57}],'USD'));