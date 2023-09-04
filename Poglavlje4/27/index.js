function skrati_niske(niz_niski, najveca_duzina) {
  for (let i = 0; i < niz_niski.length; i++) {
    const niska = niz_niski[i];

    if (niska.length > najveca_duzina) {
      const skracena_niska = niska.substr(0, najveca_duzina);
      niz_niski[i] = skracena_niska;
    }
  }
}

const niz = `Прича до сада: на почетку би створен универзум. 
Ово је разбеснело многе људе и уопштено се сматра рђавим потезом.`.split(" ");
const N = Number.parseInt(prompt("Унеси број:"));

skrati_niske(niz, N);

console.log(niz);
