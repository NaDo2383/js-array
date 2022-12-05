const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

let begginning3, ending3;

begginning3 = itCompanies.slice(0, 3);
ending3 = itCompanies.slice(itCompanies.length - 4, itCompanies.length - 1);

console.log("array iin ehnii 3 company bol " + begginning3);
console.log("array iin suuliin 3 company bol " + ending3);

if (itCompanies.length % 2 != 0) {
    console.log("Мэдээллийн технологийн дунд компани бол " + itCompanies[Math.ceil(itCompanies.length / 2)]);
} else {
    console.log("Мэдээллийн технологийн дунд компани бол " + itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1));
}

delete itCompanies[0];
delete itCompanies[itCompanies.length - 1];
itCompanies.pop();
itCompanies.shift();
console.log(itCompanies);