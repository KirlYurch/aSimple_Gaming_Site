function game1() {
    let monthNumber = Number(prompt('Напишите номер месяца, чтобы определить к какому сезону он принадлежит'));
if (1 <= monthNumber && monthNumber <= 12) {
    if (3 <= monthNumber && monthNumber <= 5) {
    console.log('Весна');
    } else if (6 <= monthNumber && monthNumber <= 8) {
    console.log('Лето');
    } else if (9 <= monthNumber && monthNumber <= 11) {
    console.log('Осень'); 
    } else {
    console.log('Зима');
    }
} else {
console.log('Введен некорректный номер месяца');
}
}
