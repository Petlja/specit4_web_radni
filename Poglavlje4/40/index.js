function procitaj_broj_iz_polja(id_polja) {
  const polje = document.getElementById(id_polja);
  if (polje !== null) {
    const sadrzaj_polja = polje.value;
    const broj = Number.parseFloat(sadrzaj_polja);
    return broj;
  } else {
    console.log("Не постоји поље са идентификатором:", id_polja);
    return 0;
  }
}

function dohvati_oznacenu_operaciju() {
  const operacije = ["zbir", "razlika", "mnozenje", "deljenje"];

  for (let i = 0; i < operacije.length; i++) {
    const operacija = operacije[i];

    const polje = document.getElementById(operacija);
    if (polje.checked) {
      return operacija;
    }
  }

  return null;
}

function upisi_rezultat(rezultat) {
  const polje = document.getElementById("rezultat");
  if (polje !== null) {
    polje.innerText = `Резултат: ${rezultat}`;
  } else {
    console.log("Не постоји поље са идентификатором: rezultat");
  }
}

function na_klik_dugmeta() {
  const prvi_broj = procitaj_broj_iz_polja("prvi-broj");
  const drugi_broj = procitaj_broj_iz_polja("drugi-broj");
  const operacija = dohvati_oznacenu_operaciju();

  switch (operacija) {
    case "zbir": {
      upisi_rezultat(prvi_broj + drugi_broj);
      break;
    }
    case "razlika": {
      upisi_rezultat(prvi_broj - drugi_broj);
      break;
    }
    case "mnozenje": {
      upisi_rezultat(prvi_broj * drugi_broj);
      break;
    }
    case "deljenje": {
      upisi_rezultat(prvi_broj / drugi_broj);
      break;
    }
    default: {
      console.log("Ниједна операција није означена");
    }
  }
}

const dugme = document.getElementById("dugme");
if (dugme !== null) {
  dugme.addEventListener("click", na_klik_dugmeta);
} else {
  console.log("Не постоји елемент са идентификатором: dugme");
}
