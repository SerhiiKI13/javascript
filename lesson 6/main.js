//#dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
//let lengthText = (arr)=>arr.map(str=>str.length);
//let text = ['hello world', 'lorem ipsum', 'javascript is cool'];
//console.log(lengthText(text));



// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
//let upText = (arr)=>arr.map(str=>str.toUpperCase());
// let text = ['hello world', 'lorem ipsum', 'javascript is cool'];
// console.log(upText(text));


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//let txt = (arr)=>arr.map(str=>str.toLowerCase());
// let text = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// console.log(txt(text));

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//let str = ' dirty string   '
// console.log(str.trim());
//


//
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//let stringToArray = (str)=> str.split(' ');
// let str = 'Ревуть воли як ясла повні';
// console.log(stringToArray(str));


//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//let numberArray = (number)=> number.map(number => number.toString());
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(numberArray(numbers));


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//let sortNums = (array,direction)=> {
//     return array.sort((a,b) => direction ==='ascending'? a-b : b -a);
// }
// let nums = [11,21,3];
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));




//
// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
// //  -- відсортувати його за спаданням за monthDuration
//let course =(arr)=>{
//     return arr.sort((a,b) => b.monthDuration - a.monthDuration);
// }
// console.log(course(coursesAndDurationArray));

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//let course = (arr)=>{
//     return arr.filter( course => course.monthDuration > 5);
// }
// console.log(course(coursesAndDurationArray));
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//let course = (arr)=>{
// return arr.map((value, index)=>{
//     value.id = index + 1;
//     return value;
//     }
// )
// }
// console.log(course(coursesAndDurationArray));
//  =========================

//  #bolvdlhP
let suits = ['spade', 'diamond','heart', 'clubs'];
let values = ['6','7','8','9','10', 'ace','jack','queen','king'];
let cards = [];
 for (const suit of suits){
     for (const value of values) {
         const card =({cardSuit: suit, value: value});
         if (suit === 'diamond' || suit === 'heart'){
             card.color = 'red';
         } else{
             card.color = 'black';
         }
         cards.push(card);
     }
 }
 console.log(cards)
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
let arr = (array)=>{
     return array.filter (card => card.value === '6');
}
 console.log(arr(cards));
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker