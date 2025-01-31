//#qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//let i = 0;
//while (i < numbers.length){
//    let number = numbers[i];
//    console.log(number);
//    i++;
//}



// 2. перебрати його циклом for
//for (let i = 0; i < numbers.length; i++){
//    let number = numbers[i];
//    console.log(number);
//}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
  //let i = 0;
 // while (i <numbers.length){
 //   if (i % 2 !== 0){
  //      console.log(numbers[i]);
  //  }
   // i++;
//}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//for (let i = 0; i < numbers.length; i++){
//    if (i % 2 !== 0){
 //       console.log(numbers[i]);
 //   }
//}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//let i = 0;
//while(i < numbers.length){
//    if (numbers[i] % 2 === 0){
//        console.log(numbers[i]);
//    }
 //   i++;
//}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//for (let i = 0; i < numbers.length; i++){
 //   if (numbers[i] % 2 === 0){
  //      console.log(numbers[i]);
 //   }
//}
// 7. замінити кожне число кратне 3 на слово "okten"
//for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] % 3 === 0){
//       numbers[i] = 'okten';
//  }
//}
//console.log(numbers);
// 8. вивести масив в зворотньому порядку.
//for (let i = numbers.length - 1; i >= 0; i--){
//    console.log(numbers[i]);
//}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)




//let numbers = [2,17,13,6,22,31,45,66,100,-18];

// замінити кожне число кратне 3 на слово "okten"
//for (let i= numbers.length - 1; i >= 0; i--){
//     if (numbers[i] % 3 === 0){
//         numbers[i] = 'okten';
//     }console.log(numbers[i]);
// }

//перебрати циклом for та вивести  числа тільки парні  значення
//for (let i = numbers.length - 1; i >= 0; i-- ){
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//     }
// }

//перебрати циклом while та вивести  числа тільки парні  значення
//let i = numbers.length;
// while(i >= 0){
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//     }
//     i--;
// }

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//for (let i = numbers.length - 1; i >= 0; i--){
//     if (i % 2 !== 0){
//         console.log(numbers[i]);
//     }
// }
//перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = numbers.length;
// while(i >= 0){
//     if (i % 2 !== 0){
//         console.log(numbers[i]);
//     }
//     i--;
// }

// 2. перебрати його циклом for
//for (let i = numbers.length - 1; i >= 0; i--){
//     console.log(numbers[i]);
// }
//1. перебрати його циклом while
//let i = numbers.length - 1;
// while(i > 0){
//     console.log(numbers[i]);
//     i--;
// }



//#yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//let numbers =[12,123,-17,23,-57,86,90,-120,1,9];
// let i = 0;
// while(i < numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

// #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//let strings =['hello','owu','welcome','javascript','name','okten','lviv','family','link','web'];
// for ( let i = 0; i < strings.length; i++){
//     console.log(strings[i]);
// }

// #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//let mix =['hello',true,34,'owu',89,false,'welcome',312,'javascript',100];
// for (let i = 0; i < mix.length; i++){
//     console.log(mix[i]);
// }


// #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//let mix =['hello',true,34,'owu',89,false,'welcome',312,'javascript',100];
// for (let i = 0; i < mix.length; i++){
//     if (typeof mix[i] === "boolean"){
//         console.log(mix[i]);
//     }
// }

// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//let mix =['hello',true,34,'owu',89,false,'welcome',312,'javascript',100];
// for (let i = 0; i < mix.length; i++){
//     if (typeof mix[i] === "number"){
//         console.log(mix[i]);
//     }
// }

// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let mix =['hello',true,34,'owu',89,false,'welcome',312,'javascript',100];
// for (let i = 0; i < mix.length; i++){
//     if (typeof mix[i] === "string"){
//         console.log(mix[i]);
//     }
// }


//#0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//let arrays = [];
// arrays[0] = 'hello';
// arrays[1] = 23;
// arrays[2] = true;
// arrays[3] = 56;
// arrays[4] = 'owu';
// arrays[5] = false;
// arrays[6] = 'link';
// arrays[7] = 'base';
// arrays[8] = 45;
// arrays[9] = 'welcome';
// let i = 0;
// while (i < arrays.length){
//     console.log(arrays[i]);
//     i++;
// }

// #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 //   for (let i = 0; i < 10; i++){
//         document.write(`<div>поточний номер кроку: ${i}</div>`);
//         console.log(`поточний номер кроку: ${i}`);
//     }

// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 100; i++){
//     document.write(`<h1>поточний номер кроку: ${i}</h1>`);
//     console.log(`поточний номер кроку: ${i}`);
// }

// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 200.5; i+=2){
//     document.write(`<h1>поточний номер кроку: ${i}</h1>`);
//     console.log(`поточний номер кроку: ${i}`);
// }

// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//for (let i = 0; i < 200.5; i++){
//     if (i % 2 === 0){
//         console.log(`поточний номер кроку: ${i}`);
//         document.write(`<h1>поточний номер кроку: ${i}</h1>`);
//     }
// }
// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//for (let i = 0; i < 200; i++){
//     if (i % 2 !== 0){
//         console.log(`поточний номер кроку: ${i}`);
//         document.write(`<h1>поточний номер кроку: ${i}</h1>`);
//     }
// }

//#reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "The Great Adventures of Sherlock Holmes",
        pages: 350,
        authors: ["Arthur Conan Doyle"],
        genres: ["Mystery"]
    },
    {
        title: "The Lord of the Rings",
        pages: 1200,
        authors: ["J.R.R. Tolkien"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        pages: 400,
        authors: ["J.K. Rowling"],
        genres: ["Fantasy", "Magic", "Mystery"]
    },
    {
        title: "The Hunger Games",
        pages: 450,
        authors: ["Suzanne Collins"],
        genres: ["Adventure"]
    },
    {
        title: "Good Omens",
        pages: 350,
        authors: ["Neil Gaiman", "Terry Pratchett"],
        genres: ["Fantasy", "Comedy", "Adventure"]
    },
    {
        title: "War and Peace",
        pages: 1500,
        authors: ["Leo Tolstoy"],
        genres: ["Historical"]
    }
];
// - знайти наібльшу книжку.
//let maxPagebook = books[0];
// for(let i = 1; i < books.length; i++){
//     if (books[i].pages > maxPagebook.pages){
//         maxPagebook = books[i];
//     }
// }
// console.log(maxPagebook);

// - знайти книжку/ки з найбільшою кількістю жанрів
//let maxBookGenre = 0;
// for (let i = 1; i < books.length; i++){
//     if (books[i].genres.length > maxBookGenre){
//         maxBookGenre = books[i].genres.length;
//     }
// }
// console.log(maxBookGenre);
// for (let i = 0; i <books.length; i++){
//     if (books[i].genres.length === maxBookGenre){
//         console.log(books[i].title);
//     }
// }

// - знайти книжку/ки з найдовшою назвою
//let Bigname = 0;
// for (let i = 0; i < books.length; i++){
//     if (books[i].title.length > Bigname){
//         Bigname = books[i].title.length;
//     }
// }
// console.log(Bigname);
// for (let i = 0; i < books.length;i++){
//     if (books[i].title.length === Bigname){
//         console.log(books[i]);
//     }
// }

// - знайти книжку/ки які писали 2 автори

//
//for (let i = 0; i < books.length; i++){
//    if (books[i].authors.length === 2){
//        console.log(books[i]);
//    }
//}
// - знайти книжку/ки які писав 1 автор
//for (let i = 0; i <books.length; i++){
//    if (books[i].authors.length === 1){
//        console.log(books[i]);
//    }
//}
