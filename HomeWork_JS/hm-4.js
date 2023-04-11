// Задание 1
// let a = prompt('Введите первое число');
// let b = prompt('Введите второе число');
// function back (a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;   
//     }
// }
// back (a,b);
// alert(`Меньшее число:  ${back (a, b)}`);


// Задание 2
// function check () {
//     let randomNumber = prompt('Пожалуйста, введите любое число');
// if (!isNaN(randomNumber)) {
//     result = randomNumber % 2;
//     if (result === 0) {
//         alert('Число четное');
//     }
//        else {
//         alert('Число нечетное');
//          }
//              } else {
//                   alert('Ввели некоректное значение');
//                  }
// }
// check ();


// Задание 3
// 3.1
// function square() {
//     let squareNumber = prompt('Пожалуйста, введите любое число');
//     let result = squareNumber ** 2;
//     console.log(result);
// }
// square();
// 3.2

// function square() {
//     let squareNumber = prompt('Пожалуйста, введите любое число');
//     let result = Math.sqrt(squareNumber);
//     console.log(result);
//     return result;
// }
// square();


// Задание 4
// function check() {
//     let age = Number(prompt('Сколько вам лет?'));
//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age < 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!');
//     }
// }
// check()


// Задание 5
// function check() {
//     let a = prompt('Пожалуйста, введите первое число');
//     let b = prompt('Пожалуйста, введите второе число');
//     if (!isNaN(a) && !isNaN(b)) {
//         let result = a * b;
//         alert(`Произведение чисел: ${result}`);
//         return (result);
//     } else {
//         alert('Одно или оба значения не являются числом');
//         return(a, b);
//     }
// }
// check()


// Задание 6
// function check() {
//     let n = (prompt('Пожалуйста, введите любое число n: '));
//     if (!isNaN(n)) {
//         let result = n ** 3;
//         alert(`n в кубе равняется ${result}`);
//         return(result);
//     } else {
//         alert('Переданный параметр не является числом');
//         return;
//     }
// }
// check()


// Задание 7
// function getCircleArea() {
//     return this.numberPi * this.squareRadius;
// }
// function getCirclePerimeter() {
//     return this.twoπ * this.squareRadius;
    
// }
// const circle1 = {
//     radius: 3,
//     squareRadius: 3 ** 2,
//     numberPi: 3.14,
//     twoπ: 2 * 3.14,

//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
// }
// const circle2 = {
//     radius: 5,
//     squareRadius: 5 ** 2,
//     numberPi: 3.14,
//     twoπ: 2 * 3.14,

//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
// }
// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());