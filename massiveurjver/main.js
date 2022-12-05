const arr1 = [3, 45, 23, 78, 34];
const arr2 = [4, 2, 34, 4, 12, 1];

if (arr1.length > arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (i == j) {
                arr1[i] = arr2[i] * arr1[i]
            }
        }
    }
    console.log(arr1);
} else {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (i == j) {
                arr2[i] = arr2[i] * arr1[i]
            }
        }
    }
    console.log(arr2);
}


