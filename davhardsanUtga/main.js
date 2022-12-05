const arr = [4, 2, 34, 4, 1, 12, 1, 4], arr1 = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            arr1.push(arr[i]);
            break;
        }
    }
}

// const arr2 = Array.from(new Set(arr1));
const arr2 = arr1.filter((value, index) => {
    return arr1.indexOf(value) === index
})

console.log(arr2);