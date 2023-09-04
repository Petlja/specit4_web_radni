const ivan = {
  lektire: [
    { naslov: "Мајстор и Маргарита", broj_strana: 372 },
    { naslov: "Чекајући Годоа", broj_strana: 150 },
    { naslov: "Злочин и казна", broj_strana: 576 },
  ],
  vreme_citanja(broj_stranica_po_danu) {
    for (let i = 0; i < this.lektire.length; i++) {
      const lektira = this.lektire[i];
      const broj_dana = Math.ceil(lektira.broj_strana / broj_stranica_po_danu);

      console.log(`Број дана за читање лектире ${lektira.naslov} је:`, broj_dana);
    }
  },
};

const prosecan_broj_stranica = Number.parseInt(prompt("Унеси број страница:"));
ivan.vreme_citanja(prosecan_broj_stranica);
