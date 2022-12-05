let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];
console.log(data);
let word = prompt("array dotorh ugnees neg ug oruulna uu"), wordCount = 0;

for (let i = 0; i < data.length; i++) {
    if (word == data[i]) {
        wordCount++;
    }
}

if (wordCount > 0) {
    console.log(word, "gedeg ug array-d", wordCount, "udaa orson bn");
} else {
    console.log(word, "gedeg ug array-d baihgui bn");
}