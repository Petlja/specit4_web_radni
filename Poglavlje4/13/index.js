const adresa = prompt("Унеси твоју адресу електронске поше:");

const indeks_mankija = adresa.indexOf("@");
const prikriveni_deo = adresa.substring(adresa, 2) + "...";
const prikrivena_adresa = prikriveni_deo + adresa.substring(indeks_mankija + 1, adresa.length);

console.log("Твојa прикривена адреса је:", prikrivena_adresa);
