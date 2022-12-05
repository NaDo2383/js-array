const array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let odd = 0; even = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        odd++;
    } else {
        even++;
    }
}
console.log("array dotorh niit tegsh too bol " + even);
console.log("array dotorh niit sondgoi too bol " + odd);