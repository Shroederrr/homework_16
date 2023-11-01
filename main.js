const a = +prompt("Скільки буде 2+2?");
const b = prompt("Сонце встає на сході");
const c = prompt("Скільки буде 5 / 0?");
const d = prompt("Якого кольору небо?");
const e = +prompt("Яка правильна відповідь на головне питання життя, всесвіту та всього такого.");

let sum = 0;
const add = 10;

if (a == 4) {
    sum += add;
} else {
    sum += 0;
}

if (b == "Так") {
    sum += add;
} else {
    sum += 0;
}

if (c == "На 0 ділити не можна" || c == "На нуль ділити не можна") {
    sum += add;
} else {
    sum += 0;
}

if (d == "Блакитне" || d == "Блакитного") {
    sum += add;
} else {
    sum += 0;
}

if (e == 42) {
    sum += add;
} else {
    sum += 0;
}

alert(`Загальна кількість ваших балів: ${sum}`);