/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let summ = 0;
    for (; start <= end; start++) {
        if (start % 2 == 0) {
            summ += start;
        }
    }
    return summ;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let countDivision = 0;
    while (a > 0.1) {
        a /= 2;
        countDivision++;
    }
    return countDivision;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let i = 0;
    let newStr = '';

    do {
        if ((i + 1) % 3 == 0) {
            newStr += '_';
        } else {
            newStr += message[i];
        }

        i++;
    } while (message.length > i);

    return newStr;
}
