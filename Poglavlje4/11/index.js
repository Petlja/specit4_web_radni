const ime = prompt("Унеси своје име:");
const prezime = prompt("Унеси своје презиме:");

const ime_prezime = ime + " " + prezime;

const inicijal_imena = ime.charAt(0);
const inicijal_prezimena = prezime.charAt(0);
const inicijali = inicijal_imena + "." + inicijal_prezimena + ".";

const pozdrav = "Здраво, " + ime_prezime + "! Твоји иницијали су " + inicijali;
console.log(pozdrav);
