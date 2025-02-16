const num1 = 3;
const operator = '/';
const num2 = 1;

let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        console.log('Ошибка: деление на ноль!');
    }
} else {
    console.log('Ошибка: неизвестный оператор!');
}

console.log(`Результат: ${result}`);