const zuto_zeleni_pasus = document.getElementById("zuto-zeleni");
if (zuto_zeleni_pasus !== null) {
  zuto_zeleni_pasus.style.backgroundColor = "green";
  zuto_zeleni_pasus.style.color = "yellow";
} else {
  console.log("Нe postoji pasus sa identifikatorom zuto-zeleni");
}

const pasus_sa_velikom_slovima = document.getElementById("velika-iskosena-slova");
if (pasus_sa_velikom_slovima !== null) {
  pasus_sa_velikom_slovima.style.fontSize = "20px";
  pasus_sa_velikom_slovima.style.fontStyle = "italic";
} else {
  console.log("Нe postoji pasus sa identifikatorom velika-iskosena-slova");
}
