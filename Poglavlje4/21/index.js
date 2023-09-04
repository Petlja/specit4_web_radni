const svote_novca = [4200, 6300, 5100, 4100, 5500];

let ukupna_svota = 0;
let provizija = 0;

for (let i = 0; i < svote_novca.length; i++) {
  const svota_u_redu = svote_novca[i];
  ukupna_svota += svota_u_redu;

  if (svota_u_redu < 5000) {
    provizija += 50;
  } else {
    provizija += svota_u_redu / 100;
  }
}

console.log(`Ученици су укупно прикупили ${ukupna_svota} динара.`);
console.log(`Укупна провизија износи ${provizija} динара.`);
