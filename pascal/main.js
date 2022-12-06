const arr = [1];
const arr1 = [1, 2, 1];
const arr2 = [1, 1];
const array = [];
let n = prompt("duriin eyereg buhel too oruulna uu ");
console.log(arr);
console.log(arr2);
console.log(arr1);
for (let i = 0; i < n - 3; i++) {
    for (let k = 0; k < arr1.length; k++) {
        array[k] = arr1[k];
    }
    for (let j = 0; j <= Math.floor(arr1.length / 2); j++) {
        arr1[j + 1] = array[j + 1] + array[j];
    }
    for (let l = 0; l <= Math.floor(arr1.length / 2); l++) {
        arr1[arr1.length - l] = arr1[l];
    }
    console.log(arr1);
}



