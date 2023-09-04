function na_klik_dugmeta() {
  console.log("Клик!");
}

const dugme = document.getElementById("klik");
if (dugme !== null) {
  dugme.addEventListener("click", na_klik_dugmeta);
} else {
  console.log("Не постоји дугме са идентификатором: klik");
}
