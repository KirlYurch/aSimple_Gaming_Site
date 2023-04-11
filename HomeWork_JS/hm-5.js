
// Задание 1
// const array = [1, 5, 4, 10, 0, 3];
// for (let a = 0; a < array.length; a++) {
//     console.log(array[a]);
//     if (array[a] === 10) break;
// }


// Задание 2
// const array = [1, 5, 4, 10, 0, 3];
// array.forEach((el, index) => {
//     if (el === 4) {
//         console.log(`${index}`);
// }});


// Задание 3
// let array = [1, 3, 5, 10, 20];
// array = array.join('');
// console.log(array);


// Задание 4
// let arr = [];
// for (let a = 0; a < 3; a++) {
//     arr[a] = [];
//     for (let b = 0; b < 3; b++) {
//         arr[a].push(1);
//     }
// }
// console.log(arr);


// Задание 5
// let array = [1, 1, 1];
// array.push(2, 2, 2);
// console.log(array);


// Задание 6
// let array = [9, 8, 7, 'a', 6, 5];
// array = array.sort();
// array.pop();
// console.log(array);


// Задание 7
// let array = [9, 8, 7, 6, 5];
// let userNumbers = Number(prompt("Введите число от 1 до 10:"));
// let search = array.includes(userNumbers);
// alert(search);

// Задание 8
// let line = ['a', 'b', 'c', 'd', 'e', 'f'];
// line.reverse();
// line = line.join('');
// console.log(line);


// Задание 9
// let array = [
//     [1, 2, 3,],
//     [4, 5, 6]
// ];
// const upArray = array.flat();
// console.log(upArray);


// Задание 10
// let arrayRandom = [2, 5, 7, 1, 8, 3, 9];
// for (let a = 0; a < arrayRandom.length -1; a++) {
//     console.log(arrayRandom [a] + arrayRandom [a + 1]);
// }


// Задание 11
// function square () {
//     const arrayRandom = [2, 5, 7, 1, 8, 3, 9];
//     let result = arrayRandom.map(item => (item**2));
//     console.log(result);
// }
// square();


// Задание 12
// function longWords() {
//     let arrayLonghWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
//     let result = arrayLonghWords.map(str => str.length);
//     console.log(result);
// }
// longWords();


// Задание 13
// function negative () {
//     const arrayRandom = [-2, 5, -7, 1, 8, -3, 9];
//     const result = arrayRandom.filter(item => item < 0);
//     console.log(result);
// }
// negative();


// Задание 14
// let arrayRandom = [];
// for (let a = 0; a < 10; a++) {
//     arrayRandom[a] = Math.round(Math.random() * 10);
// }
// let result = arrayRandom.filter(item => item % 2 === 0);
// console.log(arrayRandom);
// console.log(result);


// Задание 15
// let arrayRandom = [];
// for (let a = 0; a < 6; a++) {
//   arrayRandom[a] = Math.round(Math.random() * 10);
// }
// console.log(arrayRandom);
// let result = arrayRandom.reduce((intermediate, value) => intermediate + value);
// let total = result / 6;
// console.log(total);