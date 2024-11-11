function game1() {
    let monthNumber = Number(prompt('Напишите номер месяца, чтобы определить к какому сезону он принадлежит'));
    if (1 <= monthNumber && monthNumber <= 12) {
        if (3 <= monthNumber && monthNumber <= 5) {
            alert('Весна');
        } else if (6 <= monthNumber && monthNumber <= 8) {
            alert('Лето');
        } else if (9 <= monthNumber && monthNumber <= 11) {
            alert('Осень');
        } else {
            alert('Зима');
        }
    } else {
        alert('Введен некорректный номер месяца');
    }
}

function game2() {
    let fruitsGame = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruitsGame = fruitsGame.sort(() => Math.random() - 0.5);
    alert(`${fruitsGame.join(", ")}`);
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

function game3() {
    const riddle = "Зимой и летом одним цветом"; // загадка
    const answer = "Ёлка"; // правильный ответ
    const hints = ["Это дерево", "Оно зеленое круглый год"]; // подсказки
    let attempts = 3; // количество попыток
    let hintIndex = 0; // индекс текущей подсказки

    // Функция для замены "ё" на "е" для корректного сравнения
    function normalize(text) {
        return text.toLowerCase().replace(/ё/g, 'е');
    }

    while (attempts > 0) {
        let userAnswer = prompt(`Загадка: ${riddle}\nУ вас осталось попыток: ${attempts}`).trim();

        if (normalize(userAnswer) === normalize(answer)) {
            alert("Поздравляем, вы угадали!");
            return;
        } else {
            attempts--;
            if (attempts > 0 && hintIndex < hints.length) {
                alert(`Неправильно. Подсказка: ${hints[hintIndex]}`);
                hintIndex++;
            } else if (attempts > 0) {
                alert("Неправильно. Попробуйте ещё раз!");
            }
        }
    }
    alert(`К сожалению, вы проиграли. Правильный ответ: ${answer}`);
}
