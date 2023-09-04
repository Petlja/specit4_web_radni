const godina_niska = prompt("Унеси годину:");
const godina = Number.parseInt(godina_niska);

if (godina % 4 !== 0 || (godina % 100 === 0 && godina % 400 !== 0)) {
  console.log("Година има 365 дана (проста је година).");
} else {
  console.log("Година има 366 дана (преступна је година).");
}
