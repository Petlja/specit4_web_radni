let sijalica_je_ugasena = true;

function na_klik_sijalice() {
  const sijalica = document.getElementById("sijalica");

  if (sijalica_je_ugasena) {
    sijalica.src = "./upaljena_sijalica.png";
  } else {
    sijalica.src = "./ugasena_sijalica.png";
  }

  sijalica_je_ugasena = !sijalica_je_ugasena;
}

const sijalica = document.getElementById("sijalica");
if (sijalica !== null) {
  sijalica.addEventListener("click", na_klik_sijalice);
} else {
  console.log("Не постоји слика са идентификатором: sijalica");
}
