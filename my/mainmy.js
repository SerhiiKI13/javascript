//function array(arr){
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if (max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(array([10, 20, 5, 100, 40]));


//This is pizdets
//function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let exchangeRate = 0;
//     for (let i = 0; i < currencyValues.length;i++){
//         if (currencyValues[i].currency === exchangeCurrency){
//             exchangeRate = currencyValues[i].value;
//         }
//     }
//     if (exchangeRate > 0){
//         return sumUAH / exchangeRate;
//     } else {
//         return 'Pidor';
//     }
// }
// console.log(exchange(1000,[{currency: 'USD', value:25}], 'USD'))

//function sum(arr){
//     let total = 0;
//     for (let i = 0;i < arr.length;i++){
//         total += arr[i];
//     }
//     return total;
// }
// let numbers =[1,2,10];
// console.log(sum(numbers));

//function text(arr){
//     let total = arr[0];
//     for (let i = 1;i < arr.length;i++){
//         if (total.length < arr[i].length){
//             total = arr[i];
//         }
//     }
//     return total;
// }
// let longest = ['apple', 'banana', 'kiwi'];
// console.log(text(longest));


function multiExchange(sumUAH,currencyValues,exchangeCurrency){
    let exchangeRate = 0;
    for (let i = 0; i < currencyValues.length; i++){
        if (currencyValues[i].currency === exchangeCurrency){
            exchangeRate = currencyValues[i].value;
        }
    }


    if (exchangeRate > 0){
        return sumUAH / exchangeRate;
    } else{
        return 'This is not from values'
    }

}
console.log(multiExchange(1000,[{currency: 'USD', value:25}], 'USD'))