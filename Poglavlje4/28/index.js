function skrati_niske(niz_niski, najveca_duzina) {
  const novi_niz = [];

  for (let i = 0; i < niz_niski.length; i++) {
    const niska = niz_niski[i];

    if (niska.length > najveca_duzina) {
      const skracena_niska = niska.substr(0, najveca_duzina);
      novi_niz.push(skracena_niska);
    } else {
      novi_niz.push(niska);
    }
  }

  return novi_niz;
}

const niz = `Прича до сада: на почетку би створен универзум. 
Ово је разбеснело многе људе и уопштено се сматра рђавим потезом.`.split(" ");
const N = Number.parseInt(prompt("Унеси број:"));

const novi_niz = skrati_niske(niz, N);

console.log(niz);
console.log(novi_niz);
