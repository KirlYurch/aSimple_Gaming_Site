// Задание 1
// arrayRandom = [];
// for (let a = 0; a < 5; a++) {
//     arrayRandom[a] = Math.round(Math.random() * 10);
// }
// console.log(arrayRandom);
// function mult(arrayRandom) {
//     result = arrayRandom.reduce((intermediate, value) => intermediate * value);
//     console.log(result);
// }
// function sum(arrayRandom) {
//     result = arrayRandom.reduce((intermediate, value) => intermediate + value);
//     console.log(result);
// }
// function getResult(callback, arrayRandom) {
//     callback(arrayRandom);
// }
// getResult(mult, arrayRandom);
// getResult(sum, arrayRandom);


// Задание 2
// const users = [
//     { name: 'Jon', age: 22 },
//     { name: 'Richard', age: 18 },
//     { name: 'Anton', age: 32 },
//     { name: 'Lida', age: 23 },
//     { name: 'Bob', age: 44 }
// ];
// users.sort(function (a, b) {
//     return a.age - b.age
// });
// console.log(users);


// Задание 3
// const arr = [1, '4', false, 9, 'two'];
// function upheaval(arr) {
//     reversArr = arr.reverse();
//     console.log(reversArr);
// };
// function transformation() {
//     toNumberArr = arr.map(Number).filter(a => !Number.isNaN(a));
//     console.log(toNumberArr);

// };
// function each(callback, arr) {
//     callback(arr);
// };
// each(upheaval, arr);
// each(transformation, arr);


// Задание 4
// setTimeout(() => { clearInterval(timerId); console.log("30 секунд прошло"); }, 30000);
// let date = new Date();
// let time = () => {
//     console.log(date);
// }
// let timerId = setInterval((time), 3000);


// Задание 5
// function calling() {
//     console.log('Звоню!')
// };
// function beeps() {
//     setTimeout(talk, 1000);
//     console.log('Идут гудки...')
// }
// function talk() {
//     console.log('Разговор')
// }
// calling();
// beeps(talk);