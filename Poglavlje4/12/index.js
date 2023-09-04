const ime_prezime = prompt("Унеси твоје име и презиме:");

const indeks_razmaka = ime_prezime.indexOf(" ");
const ime = ime_prezime.substring(0, indeks_razmaka);
const prezime = ime_prezime.substring(indeks_razmaka + 1, ime_prezime.length);

console.log("Твоје име је:", ime);
console.log("Твоје презиме је:", prezime);
