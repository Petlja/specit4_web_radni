const tekst = prompt("Унеси текст:");

const tekst_sa_malim_slovima = tekst.toLowerCase();
const parametrizovan_tekst = tekst_sa_malim_slovima.replaceAll(" ", "-");

console.log(parametrizovan_tekst);

// Могло је и овако:
// parametrizovan_tekst = tekst.toLowerCase().replaceAll(" ", "-");
