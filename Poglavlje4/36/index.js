function procitaj_sabirak_iz_polja(id_polja) {
  const polje = document.getElementById(id_polja);
  if (polje !== null) {
    const sadrzaj_polja = polje.value;
    const sabirak = Number.parseFloat(sadrzaj_polja);
    return sabirak;
  } else {
    console.log("Не постоји поље са идентификатором:", id_polja);
    return 0;
  }
}

function upisi_vrednost_u_polje(id_polja, vrednost) {
  const polje = document.getElementById(id_polja);
  if (polje !== null) {
    polje.value = vrednost.toString();
  } else {
    console.log("Не постоји поље са идентификатором:", id_polja);
  }
}

const prvi_sabirak = procitaj_sabirak_iz_polja("prvi-sabirak");
const drugi_sabirak = procitaj_sabirak_iz_polja("drugi-sabirak");

const zbir = prvi_sabirak + drugi_sabirak;
upisi_vrednost_u_polje("zbir", zbir);
