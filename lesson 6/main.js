// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s1 = 'hello world';
// console.log(s1.length);
// let s2 = 'lorem ipsum';
// console.log(s2.length);
// let s3 = 'javascript is cool';
// console.log(s3.length);

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s1 = 'hello world';
// console.log(s1.toUpperCase());
// let s2 = 'lorem ipsum';
// console.log(s2.toUpperCase());
// let s3 = 'javascript is cool';
// console.log(s3.toUpperCase());

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let s1 = 'HELLO WORLD';
// console.log(s1.toLowerCase());
// let s2 = 'LOREM IPSUM';
// console.log(s2.toLowerCase());
// let s3 = 'JAVASCRIPT IS COOL';
// console.log(s3.toLowerCase());

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());a


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// const stringToarray = (str) => str.split(' ');
// let str = 'Ревуть воли як ясла повні';
// console.log(stringToarray(str));

//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let strings = (str) => str.map(value => value.toString());
// console.log(strings(numbers));


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// const sortNums = (array,direction) =>{
//     if (direction === 'ascending') return array.sort((a,b) => a - b)
//     if (direction === 'descending') return array.sort((a,b)=> b - a)
// }
// let nums = [11,21,3];
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums, 'descending'));


// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// const sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration );
// console.log(sort);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// const filter = sort.filter(value => value.monthDuration > 5);
// console.log(filter);
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//  const map = filter.map((value,index) => {
//   value.id = index + 1;
//   return value;
// })
// console.log(map)
// =========================


// //     #bolvdlhP
// // описати колоду карт (від 6 до туза без джокерів)
// // - знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king'
// //     color:'', // 'red','black'
// // }
// const suits =  ['spade', 'diamond','heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king']
// const  cards = [];
// for (const suit of suits){
//     for (const value of values) {
//         const card = {suit: suit, value: value };
//         if (card.suit === 'heart' || card.suit === 'diamond'){
//             card.color = 'red';
//         }else{
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
// // - знайти піковий туз
// console.log(cards.find(value => value.value === 'ace' && value.suit === 'spade'));
// // - всі шістки
// console.log(cards.filter(value => value.value === '6'));
// // - всі червоні карти
// console.log(cards.filter(value => value.color === 'red'));
// // - всі буби
// console.log(cards.filter(value => value.suit === 'clubs'));
// // - всі трефи від 9 та більше
// console.log(cards.filter(value => value.value !== '6' && value.value !== '7' && value.value !== '8' && value.value !== '9'));
//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// // }
// const cardsSuits = cards.reduce((previousValue, currentValue) => {
//     switch (currentValue.suit) {
//         case 'spade' :
//             previousValue.spades.push(currentValue);
//             break;
//         case 'diamond' :
//             previousValue.diamonds.push(currentValue);
//             break;
//         case 'heart' :
//             previousValue.hearts.push(currentValue);
//             break;
//         case 'clubs' :
//             previousValue.clubs.push(currentValue);
//             break;
//     }
//     return previousValue;
// }, {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// })
// console.log(cardsSuits);

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// // --написати пошук всіх об'єктів, в яких в modules є docker
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // --написати пошук всіх об'єктів, в яких в modules є sass
// let find = coursesArray.filter(value => {
//     return value.modules.includes('sass');
// })
// console.log(find)
// // --написати пошук всіх об'єктів, в яких в modules є docker
// let finds = coursesArray.filter(value => {
//     return value.modules.includes('docker');
// })
// console.log(finds)