
//     Основы JavaScript
// Напиши функцию, которая находит наибольшее число в массиве.
// let numbers = [10, 25, 8, 99, 3, 15, 2, 7];
// let num = (arr)=> {
//     let max = arr[0];
//     for (let i = 1; i < arr.length;i++){
//         if (max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(num(numbers));

//     Напиши функцию, которая возвращает строку без пробелов в начале и в конце.
// let dirtyString = "  hello world  ";
// const string = (text)=>{
//    text = text.trim();
//    return text;
// }
// console.log(string(dirtyString));

//     Напиши функцию, которая принимает строку и возвращает ее в верхнем регистре.
// let lowerCaseText = "javascript is awesome";
// const TEXT_UP = (arr)=> arr.toUpperCase();
// console.log(TEXT_UP(lowerCaseText));



//     Напиши функцию, которая проверяет, является ли строка палиндромом (то есть читается одинаково с обеих сторон).
// let palindromeString = "madam";
// const palindrome = (str)=> {
//    let reserved = str.split('').reverse().join('');
//    return str === reserved;
// }
// console.log(palindrome(palindromeString));

// Строки и Массивы
// Напиши функцию, которая принимает строку и возвращает массив слов, разделенных пробелами.
// let sentence = "Ревуть воли як ясла повні";
// const IsArray = (arr)=> arr.split(' ');
// console.log(IsArray(sentence));

//     Напиши функцию, которая принимает массив чисел и возвращает их в строковом представлении.
// let evenNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const string = (txt)=> txt.map(num => num.toString());
// console.log(string(evenNumbersArray));
//     Напиши функцию, которая принимает массив чисел и выводит только четные числа.
// let evenNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const number = (num)=>{
//     return num.filter(num => num % 2  === 0)
// }
// console.log(number(evenNumbersArray));

//     Напиши функцию, которая находит все строки в массиве, длина которых больше 5 символов.
// let wordsArray = ["apple", "banana", "kiwi", "watermelon", "grape"];
// const findLengthText = (str) => str.filter(str=> str.length > 5);
// console.log(findLengthText(wordsArray));

//     Массивы и Объекты
// Напиши функцию, которая находит все элементы массива объектов с определенным значением по ключу.
//     Напиши функцию, которая возвращает массив объектов, где каждый объект имеет свойства id, title и monthDuration, добавив каждому объекту уникальный id.
// let coursesAndDurationArray = [
//     { title: "JavaScript Complex", monthDuration: 5 },
//     { title: "Java Complex", monthDuration: 6 },
//     { title: "Python Complex", monthDuration: 6 },
//     { title: "QA Complex", monthDuration: 4 },
//     { title: "FullStack", monthDuration: 7 },
//     { title: "Frontend", monthDuration: 4 }
// ];
// const idi = (arr)=>{
//     return arr.map((value,index)=>{
//         value.id = index + 1;
//         return value;
//     })
// }
// console.log(idi(coursesAndDurationArray));
//     Напиши функцию, которая сортирует массив объектов по числовому свойству (например, по длительности курса monthDuration).
// const sortBy = (arr)=>arr.sort((a,b)=>a.monthDuration - b.monthDuration)
// console.log(sortBy(coursesAndDurationArray));

// Фильтрация и Сортировка
// Напиши функцию, которая фильтрует массив объектов, оставляя только те, у которых значение свойства monthDuration больше 6.
// const filterCourses = (arr)=> arr.filter(arr=> arr.monthDuration > 6);
// console.log(filterCourses(coursesAndDurationArray));
// Напиши функцию, которая сортирует массив строк в алфавитном порядке.
// let stringArray = ["banana", "apple", "grape", "cherry", "orange"];
// const str = (arr)=> arr.sort();
// console.log(str(stringArray));

//     Напиши функцию, которая фильтрует массив чисел, оставляя только положительные значения.
// let mixedNumbers = [-10, 25, -3, 40, -5, 15, 7];
// const number = (arr)=> arr.filter(arr=> arr > 0);
// console.log(number(mixedNumbers))
//     Напиши функцию, которая сортирует массив чисел по убыванию.
// let descendingNumbers = [5, 20, 3, 15, 1, 7, 10];
// const numbers = (arr)=>arr.sort((a,b)=> b - a);
// console.log(numbers(descendingNumbers));

//     Стрелочные функции и Функции высшего порядка
// Напиши функцию, которая использует стрелочные функции для создания нового массива, где каждое число умножено на 2.
// let multiplyArray = [1, 2, 3, 4, 5];
// const array = (arr)=> arr.map( num=> num * 2);
// console.log(array(multiplyArray));

// Напиши функцию, которая использует стрелочные функции для преобразования массива объектов в новый массив строк, состоящих из свойства title каждого объекта.
// let titleObjects = [
//     { title: "JavaScript" },
//     { title: "Python" },
//     { title: "Java" },
//     { title: "C++" }
// ];
// const string = (text)=>text.map(text =>text.title.toString());
// console.log(string(titleObjects));
//     Напиши функцию, которая с помощью стрелочных функций суммирует все числа из массива.
// let sumNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers = (result)=>result.reduce((sum,num) => sum + num, 0)
//
// console.log(numbers(sumNumbers))
//     Задачи с картами (Как в примере с колодой карт)
// Напиши функцию, которая создает колоду карт от 6 до туза для каждой масти и добавляет цвет для каждой карты.
let suits = ['spade', 'diamond','heart', 'clubs'];
let values = ['6','7','8','9','10', 'ace','jack','queen','king'];
const cards = [];
for (const suit of suits){
    for (const value of values){
        const card = {cardSuit: suit, value: value};
        if (suit ==='heart' || suit ==='diamond'){
            card.color = 'red';
        }else{
            card.color = 'black'
        }
        cards.push(card);
    }
 }

 console.log(cards)
//     Напиши функцию, которая находит все карты с значением "7" в колоде.
const FindCards = (num)=> num.filter(card => card.value === '7');
console.log(FindCards(cards));
//     Эти задания охватывают различные темы, от базовых операций с массивами и строками до работы с объектами и фильтрацией.
//     Постепенно усложняя задачи, ты сможешь эффективно улучшить свои навыки программирования на JavaScript.