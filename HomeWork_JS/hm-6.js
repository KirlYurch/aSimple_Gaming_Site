// Задание 1
// let str = 'js';
// console.log(str.toUpperCase());


// Задание 2
// function transformation() {
//     let searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
//     let search = 'ко';
//     searchStart.forEach((searchStart) => {
//         if (searchStart.toLowerCase().includes(search.toLowerCase())) {
//             let searchEnd = [searchStart];
//             console.log(searchEnd);
//         }
//     });
// }
// transformation()


// Задание 3
// let number = 32.58884;
// console.log(`Меньшее целое число: ${Math.floor(number)}
// Большее целое число: ${Math.ceil(number)}
// Ближайшее целое число: ${Math.round(number)}`)


// Задание 4
// let arrayNumbers = [52, 53, 49, 77, 21, 32];
// function getMaxOfArray() {
//     return Math.max.apply(null, arrayNumbers);
// }
// function getMinOfArray() {
//     return Math.min.apply(null, arrayNumbers);
// }
// console.log(`Максимальное число: ${getMaxOfArray(arrayNumbers)}`);
// console.log(`Минимальное число: ${getMinOfArray(arrayNumbers)}`);


// Задание 5
// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * 10);
// }
// console.log(getRandomInt(1, 10));


// Задание 6
// workingWithNumbers ()
// function workingWithNumbers () {
//     let userNumber = prompt('Введите любое число');
//     let userNumberHalf = Math.floor(userNumber / 2);
//     let arrayRandom = [];
// for (let a = 0; a < userNumber; a++) {
//     arrayRandom[a] = Math.round(Math.random() * 10);
// }
// arrayRandom.splice(0, userNumberHalf);
// console.log(arrayRandom);
// }


// Задание 7
// function getRandomArbitrary(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
// let userNumberUp = Number(prompt('Введите меньшее число'));
// let userNumberDown = Number(prompt('Введите большее число'));
// console.log(getRandomArbitrary(userNumberDown, userNumberUp));


// Задание 8
// let currentDate = new Date();
// console.log(currentDate);


// Задание 9
// let currentDate = new Date();
// console.log(currentDate);
// currentDate.setDate(78);
// console.log(currentDate);


// Задание 10
// function conclusionTime () {
//     let currentDate = new Date();
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
//     let minutes = currentDate.getMinutes();
//     let seconds = currentDate.getSeconds();
//     let fullDate = "Сегодня: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear() + " года - это " + days[currentDate.getDay()];
//     let fullTime = "Время: " + currentDate.getHours() + " : " + minutes + " : " + seconds;
//     console.log(fullDate);
//     console.log(fullTime);
// };
// conclusionTime ();
