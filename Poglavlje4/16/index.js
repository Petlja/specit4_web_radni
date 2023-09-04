const trenutni_sprat_niska = prompt("Унеси спрат на коме се налазиш:");
const zeljeni_sprat_niska = prompt("Унеси спрат до којег желиш да те лифт одведе:");

const trenutni_sprat = Number.parseInt(trenutni_sprat_niska);
const zeljeni_sprat = Number.parseInt(zeljeni_sprat_niska);

if (trenutni_sprat < zeljeni_sprat) {
  const broj_spratova = zeljeni_sprat - trenutni_sprat;
  console.log(`Идеш горе за ${broj_spratova} спратова`);
} else if (trenutni_sprat > zeljeni_sprat) {
  const broj_spratova = trenutni_sprat - zeljeni_sprat;
  console.log(`Идеш доле за ${broj_spratova} спратова`);
} else {
  console.log("Већ се налазиш на одабраном спрату");
}
