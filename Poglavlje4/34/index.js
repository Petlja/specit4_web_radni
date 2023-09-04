const mesec = Number.parseInt(prompt("Унеси број месеца од 1 до 12:"));

const linija = document.getElementById("progresna-linija");
if (linija !== null) {
  const sirina = `${(mesec * 100) / 12}%`;
  linija.style.width = sirina;
} else {
  console.log("Не постоји елемент са идентификатором: progresna-linija");
}
