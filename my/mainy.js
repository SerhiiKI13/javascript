//#mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
////function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     let exchangeRate = 0;
//     for (let i = 0; i < currencyValues.length; i++){
//         if (currencyValues[i].currency === exchangeCurrency){
//             exchangeRate = currencyValues[i].value;
//         }
//         }
//     if (exchangeRate > 0){
//         return sumUAH / exchangeRate;
//     } else {
//         return'Валюта не знайдена';}
// }
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
// console.log(exchange(10000, [{currency:'USD', value:25}, {currency:'EUR', value:42}], 'GBP'));
//
//
// function sum(arr){
//     let total = 0;
//     for (let i = 0; i < arr.length;i++){
//         total += arr[i];
//     }
//     return total;
// }
// let numbers = [1,2,10];
// console.log(sum(numbers));
//
// function text(arr){
//     let longestTXT = arr[0];
//     for (let i = 0; i  < arr.length;i++){
//         if (longestTXT.length < arr[i].length){
//             longestTXT = arr[i];
//         }
//     }
//     return longestTXT;
// }
// let longest =['apple', 'banana', 'kiwi'];
// console.log(text(longest));








//
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let exchangeRate = 0;
    for (let i = 0; i < currencyValues.length; i++){
        if (currencyValues[i].currency === exchangeCurrency){
            exchangeRate = currencyValues[i].value;
        }
    }

    if (exchangeRate > 0){
        return sumUAH / exchangeRate;
    } else {
        return "Валюта не знайдена";
    }
}
const currencies = [
    { currency: 'USD', value: 41.76 },
    { currency: 'EUR', value: 43.27 },
    { currency: 'GPB', value: 51.75 }
];

console.log(exchange(10000, currencies, 'USD')); // -> 239.5
console.log(exchange(10000, currencies, 'EUR')); // -> 231.1
console.log(exchange(10000, currencies, 'GPB')); // -> 193.2
console.log(exchange(10000, currencies, 'JPY')); // -> "Валюта не знайдена"












