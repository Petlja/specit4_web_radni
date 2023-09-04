const verovatnoca = Math.random();

if (verovatnoca < 0.5) {
  const slika = document.getElementById("slika");
  if (slika !== null) {
    slika.src = "./planina.jpg";
    slika.alt = "Планина";
  } else {
    console.log("Не постоји елемент са идентификатором: slika");
  }
}
