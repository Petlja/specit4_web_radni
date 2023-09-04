const ucenik = {
  ime: "Јелена",
  prezime: "Перић",
  jmbg: "0101990123456",
  godina: 3,
  odeljenje: 1,
  predmet: {
    naziv: "Базе података",
    godina: 3,
    ocene: [4, 5, 5, 4],
    prosecna_ocena: 4.5,
  },
};

console.log("Ученик: ", ucenik.prezime + " " + ucenik.ime);
console.log("Назив предмета:", ucenik.predmet.naziv);
console.log("Просечна оцена:", ucenik.predmet.prosecna_ocena);
