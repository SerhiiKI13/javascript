//#awLXL6TBzg
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
 //   За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let courses = coursesAndDurationArray;
if (courses[0].monthDuration > 5){
    console.log('super');
}
if (courses[1].monthDuration > 5){
    console.log('super');
}
if (courses[2].monthDuration > 5){
    console.log('super');
}
if (courses[3].monthDuration > 5){
    console.log('super');
}
if (courses[4].monthDuration > 5){
    console.log('super');
}
if (courses[5].monthDuration > 5){
    console.log('super');
}