function izracunaj_poene(takmicar, prvi, drugi, treci) {
  const poeni_1 = (takmicar.prvi * prvi) / 100;
  const poeni_2 = (takmicar.drugi * drugi) / 100;
  const poeni_3 = (takmicar.treci * treci) / 100;

  return poeni_1 + poeni_2 + poeni_3;
}

function odredi_rezultate(niz_takmicara, prvi, drugi, treci) {
  let najvise_poena = 0;
  let pobednik = "";

  for (let i = 0; i < niz_takmicara.length; i++) {
    const takmicar = niz_takmicara[i];
    const poeni = izracunaj_poene(takmicar, prvi, drugi, treci);

    if (poeni > najvise_poena) {
      najvise_poena = poeni;
      pobednik = takmicar.ime;
    }
  }

  return pobednik;
}

const takmicari = [
  {
    ime: "Јанко",
    prvi: 20,
    drugi: 40,
    treci: 80,
  },
  {
    ime: "Јована",
    prvi: 70,
    drugi: 30,
    treci: 20,
  },
  {
    ime: "Јелена",
    prvi: 80,
    drugi: 100,
    treci: 50,
  },
];

const prvi = Number.parseFloat(prompt("Унеси број поена за први задатак:"));
const drugi = Number.parseFloat(prompt("Унеси број поена за други задатак:"));
const treci = Number.parseFloat(prompt("Унеси број поена за трећи задатак:"));

const pobednik = odredi_rezultate(takmicari, prvi, drugi, treci);

console.log("Победник је:", pobednik);
