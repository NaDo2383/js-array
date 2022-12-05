const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let sent = ""

console.log(itCompanies);

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i] + "-n urt bol " + itCompanies[i].length);
}

console.log(itCompanies[0] + " bol hamgiin ehnii company " + itCompanies[0].length);
console.log(itCompanies[itCompanies.length - 1] + " bol hamgiin suuliin company " + itCompanies[itCompanies.length - 1].length);
console.log(itCompanies[Math.ceil(itCompanies.length / 2)] + " bol goliin company " + itCompanies[Math.ceil(itCompanies.length / 2)].length);


for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

for (let i = 0; i < itCompanies.length; i++) {
    sent += itCompanies[i] + ', ';
}
console.log(sent + "зэрэг мэдээллийн технологийн томоохон компаниуд.");
