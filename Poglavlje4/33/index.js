const broj_kutije = prompt("Унеси број кутије од 1 до 5:");
const id_kutije = `kutija-${broj_kutije}`;

const kutija = document.getElementById(id_kutije);
if (kutija !== null) {
  kutija.style.visibility = "hidden";
} else {
  console.log("Не постоји кутија са идентификатором:", id_kutije);
}
