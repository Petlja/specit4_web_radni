function kursor_je_preko_pasusa() {
  const tekst = document.getElementById("tekst");
  tekst.style.fontSize = "14pt";
}

function kursor_je_napustio_pasus() {
  const tekst = document.getElementById("tekst");
  tekst.style.fontSize = "10pt";
}

const tekst = document.getElementById("tekst");
if (tekst !== null) {
  tekst.addEventListener("mouseenter", kursor_je_preko_pasusa);
  tekst.addEventListener("mouseleave", kursor_je_napustio_pasus);
} else {
  console.log("Не постоји пасус са идентификатором: tekst");
}
