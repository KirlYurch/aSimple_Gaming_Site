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

function game2() {
    let fruitsGame = [' Яблоко', ' Груша', ' Дыня', ' Виноград', ' Персик', ' Апельсин', ' Мандарин'];
    fruitsGame = fruitsGame.sort(() => Math.random() - 0.5);
    alert(`${fruitsGame}`);
    let userResponseStart = String(prompt(`Чему равнялся первый элемент массива?`));
    let userResponseEnd = String(prompt(`Чему равнялся последний элемент массива?`));

    if (userResponseStart.toLowerCase() === fruitsGame[0].toLowerCase() && userResponseEnd.toLowerCase() === fruitsGame[6].toLowerCase()) {
        alert('Вы выиграли, поздравляем!');
    } else if (userResponseStart.toLowerCase() === fruitsGame[0].toLowerCase() || userResponseEnd.toLowerCase() === fruitsGame[6].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else (
        alert('Вы проиграли, попробуйте еще раз')
    )
}

