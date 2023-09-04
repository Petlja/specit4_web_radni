function promeni_prvo_slovo_u_veliko(rec) {
  const prvo_slovo = rec.charAt(0).toUpperCase();
  const ostatak_reci = rec.substring(1);

  const nova_rec = prvo_slovo + ostatak_reci;
  return nova_rec;
}

function obradi_recenicu_rec_po_rec(recenica, obradi_rec) {
  const niz_reci = recenica.split(" ");
  const novi_niz_reci = [];

  for (let i = 0; i < niz_reci.length; i++) {
    const rec = niz_reci[i];

    const nova_rec = obradi_rec(rec);
    novi_niz_reci.push(nova_rec);
  }

  const nova_recenica = novi_niz_reci.join(" ");
  return nova_recenica;
}

const recenica = prompt("Унеси реченицу:");

let nova_recenica = obradi_recenicu_rec_po_rec(recenica, promeni_prvo_slovo_u_veliko);
console.log("Измењена реченица:", nova_recenica);

// function promeni_prvo_i_poslednje_slovo_u_veliko(rec) {
//   const prvo_slovo = rec.charAt(0).toUpperCase();
//   const poslednje_slovo = rec.charAt(rec.length - 1).toUpperCase();
//   const ostatak_reci = rec.substring(1, rec.length - 1);

//   const nova_rec = prvo_slovo + ostatak_reci + poslednje_slovo;
//   return nova_rec;
// }

// nova_recenica = obradi_recenicu_rec_po_rec(recenica, promeni_prvo_i_poslednje_slovo_u_veliko);
// console.log("Измењена реченица:", nova_recenica);
