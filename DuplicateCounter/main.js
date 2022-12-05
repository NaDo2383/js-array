let n = prompt("duriin olon orontoi too oruulna uu"), count = 0;
const array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let j = 0; j < 10; j++) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] == j) {
            count++;
            array1[j] = count;
        }
    }
    count = 0;
}
for (let k = 0; k < 10; k++) {
    console.log(k, "цифр n тоонд нийт", array1[k], "ширхэг байна");
}