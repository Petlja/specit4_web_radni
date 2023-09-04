const broj_slika = Number.parseInt(prompt("Унеси број слика од 1 до 5:"));

const lista_slika = document.getElementById("lista-slika");
if (lista_slika !== null) {
  let sadrzaj_liste = "";

  for (let i = 1; i <= broj_slika; i++) {
    const putanja_slike = `./${i}.png`;
    const stavka_liste = `
      <li>
        <img src="${putanja_slike}" width="150">
      </li>
    `;
    sadrzaj_liste += stavka_liste;
  }

  lista_slika.innerHTML = sadrzaj_liste;
} else {
  console.log("Не постоји елемент са идентификатором: lista-slika");
}
