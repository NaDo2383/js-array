let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let sum = 0, max = arrayOfNumbers[0], min = arrayOfNumbers[0];

for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
}

console.log("array dotorh toonii niilber bol " + sum);

for (let j = 0; j < arrayOfNumbers.length; j++) {
    if (max <= arrayOfNumbers[j]) {
        max = arrayOfNumbers[j];
    }
}
console.log("array dotorh hamgiin ondor bol " + max);

for (let k = 0; k < arrayOfNumbers.length; k++) {
    if (min >= arrayOfNumbers[k]) {
        min = arrayOfNumbers[k];
    }
}
console.log("array dotorh hamgiin ondor bol " + min);

arrayOfNumbers.unshift(12);

arrayOfNumbers.push(123);

console.log(arrayOfNumbers);