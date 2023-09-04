const ocene_niska = prompt("Унеси оцене раздвојене запетом:");
const ocene = ocene_niska.split(",");

let zbir_ocena = 0;

for (let i = 0; i < ocene.length; i++) {
  const ocena_niska = ocene[i];
  const ocena = Number.parseInt(ocena_niska);

  zbir_ocena += ocena;
}

const prosecna_ocena = zbir_ocena / ocene.length;

console.log("Просечна оцена је:", prosecna_ocena);
