// // #8Nmt60ZT
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// let htmlDivElement = document.createElement('div');
// htmlDivElement.classList.add('wrap');
// htmlDivElement.classList.add('collapse');
// htmlDivElement.classList.add('alpha');
// htmlDivElement.classList.add('beta');
// htmlDivElement.innerText = 'afdasjdfji';
// document.body.appendChild(htmlDivElement);
// let copy = htmlDivElement.cloneNode(true);
// document.body.appendChild(copy);

// //     #OPLI89c9G
// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let arr = ['Main','Products','About us','Contacts'];
// let htmluListElement = document.createElement('ul');
// for (const arrays of arr){
//     let htmlliElement = document.createElement('li');
//     htmlliElement.innerText = arrays;
//     htmluListElement.appendChild(htmlliElement);
//     document.body.appendChild(htmluListElement);
// }




// // #jeBqHV525U5
// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.innerText =`${coursesAndDurationArrayElement.title}  ${coursesAndDurationArrayElement.monthDuration}`;
//     document.body.appendChild(htmlDivElement);
// }




//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// //
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.classList.add('item');
//     let htmlHeadingElement = document.createElement('h1');
//     htmlHeadingElement.classList.add('heading');
//     htmlHeadingElement.innerText = `${coursesAndDurationArrayElement.title}`;
//     let htmlParagraphElement = document.createElement('p');
//     htmlParagraphElement.classList.add('description');
//     htmlParagraphElement.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
//     htmlDivElement.append(htmlHeadingElement, htmlParagraphElement);
//     document.body.appendChild(htmlDivElement);
// }
// // ==========================