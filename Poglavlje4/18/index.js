const broj_niska = prompt("Унеси троцифрен број");
const broj = Number.parseInt(broj_niska);

const karakter = prompt("Унеси: Ј, Д или С.");

if (karakter === "Ј") {
  const cifra_jedinice = broj % 10;
  console.log("Цифра на позицији јединице је:", cifra_jedinice);
} else if (karakter === "Д") {
  const cifra_desetice = Math.floor((broj % 100) / 10);
  console.log("Цифра на позицији десетице је:", cifra_desetice);
} else if (karakter === "С") {
  const cifra_stotine = Math.floor((broj % 1000) / 100);
  console.log("Цифра на позицији стотине је:", cifra_stotine);
} else {
  console.log("Унета ниска није исправна. Унеси: Ј, Д или С.");
}
