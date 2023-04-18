const arr = [
    null,
    123,
    undefined,
    null,
    'qwerty',
    34,
    undefined,
    null,
    null,
    43,
    'aerg',
    'пкцйк',
    null,
    'uioo',
];

const obj = [],
    numb = [],
    str = [],
    undef = [],
    newArray = [];

arr.forEach((i) => {
    typeof i === 'object'
        ? obj.push(i)
        : typeof i === 'string'
            ? str.push(i)
            : typeof i === 'number'
                ? numb.push(i)
                : typeof i === 'undefined'
                    ? undef.push(i)
                    : '';
});
newArray.push(str, undef, numb, obj);

const res = newArray.sort((a, b) => b.length - a.length);
console.log(res);