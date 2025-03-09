// // #sH8c4er
// // - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let htmlButtonElementElement = document.getElementById('button');
// let elementById = document.getElementById('text');
// htmlButtonElementElement.addEventListener("click", function () {
//     if (elementById.style.display === 'none'){
//         elementById.style.display = 'block';
//     }else {
//         elementById.style.display = 'none';
//     }
// })


//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let elementById = document.getElementById('age');
// let elementsByTagNameElement = document.getElementsByTagName('button')[0];
// elementsByTagNameElement.addEventListener("click", function () {
//     let age = Number(elementById.value);
//     if (isNaN(age) || age <= 0){
//         alert('Введите корректный возраст!');
//     }else if (age < 18){
//         alert('Вход запрещен!!!!');
//     }else if (age >= 18){
//         alert('Вход разрешен');
//     }
// })




// // #ymAmN2xJ
// // Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// // При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// // Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
// let elementsByTagNameElement = document.getElementsByTagName('button')[0];
// let elementByIdName = document.getElementById('name');
// let elementByIdUsername = document.getElementById('username');
// let elementByIdAge = document.getElementById('age');
// elementsByTagNameElement.addEventListener("click", function (ev) {
//     ev.preventDefault();
//     let age = Number(elementByIdAge.value)
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.innerText = `name: ${elementByIdName.value}, username: ${elementByIdUsername.value}, age: ${age}`;
//     document.body.appendChild(htmlDivElement);
// })




//
// // #2VaLt4vDczH
// // є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let currentNumber = +localStorage.getItem('number');
// currentNumber += 1;
// localStorage.setItem('number',currentNumber)
// let elementById = document.getElementById('counter');
// elementById.innerText = currentNumber;



//rfsf
// #LhSfdhM3
// // Є сторінка index html (назва довільна), при відвідуванні якої в локальне сховще,
// // в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// // Є  сторінка sessionsListPage.html (назва довільна),
// // при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index11.1.html.
// // Інфу НЕ виводити в консоль, а малювати в DOM
// let sessionsList = [];
// if (localStorage.getItem('sessionsList')){
//    sessionsList = JSON.parse(localStorage.getItem('sessionsList'))
// }else {
//     sessionsList = []
// }
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));



// // #Jg0gPO00
// // створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// let kg = document.getElementById('kg');
// let result = document.getElementById('f');
// kg.oninput = function () {
// result.innerText = +this.value * 2.2;
// }

//
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
// function addToLocalStorage(arrayName,objToAdd){
//     let itemLs = localStorage.getItem(arrayName);
//    let array = JSON.parse(itemLs);
//    if (typeof objToAdd === 'object'){
//        array.push(objToAdd);
//    }
//    localStorage.setItem(arrayName, JSON.stringify(array));
// }
// addToLocalStorage('sessionsList', {});


//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// const tableGenerator = document.forms['tableForms'];
// const table = document.getElementById('table')
// tableGenerator.onsubmit = function (ev){
//     table.innerText= '';
//     ev.preventDefault();
//     const linesValue = +tableGenerator.lines.value;
//     const cellsValues = +tableGenerator.cells.value;
//     const infoValues = tableGenerator.info.value;
//     console.log(linesValue, cellsValues, infoValues)
//
//     for (let i = 0; i < linesValue; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 0; j < cellsValues; j++){
//         const td = document.createElement('td');
//         td.innerText = infoValues;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
//     }
// }
//
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається



//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів