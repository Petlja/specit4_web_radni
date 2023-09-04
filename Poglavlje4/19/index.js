const broj_niska = prompt("Унеси троцифрен број");
const broj = Number.parseInt(broj_niska);

const karakter = prompt("Унеси: Ј, Д или С.");

switch (karakter) {
  case "Ј": {
    const cifra_jedinice = broj % 10;
    console.log("Цифра на позицији јединице је:", cifra_jedinice);
    break;
  }
  case "Д": {
    const cifra_desetice = Math.floor((broj % 100) / 10);
    console.log("Цифра на позицији десетице је:", cifra_desetice);
    break;
  }
  case "С": {
    const cifra_stotine = Math.floor((broj % 1000) / 100);
    console.log("Цифра на позицији стотине је:", cifra_stotine);
    break;
  }
  default: {
    console.log("Унета ниска није исправна. Унеси: Ј, Д или С.");
  }
}
