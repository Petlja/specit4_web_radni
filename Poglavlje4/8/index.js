const broj_sedista = 100;

const odeljenje_unos = prompt("Унеси број одељења:");
const broj_odeljenja = Number.parseInt(odeljenje_unos);

const ucenici_unos = prompt("Унеси број ученика по одељењу:");
const broj_ucenika = Number.parseInt(ucenici_unos);

const ukupno_sedista = broj_odeljenja * broj_ucenika;
const broj_predstava = Math.ceil(ukupno_sedista / broj_sedista);
console.log("Број представа који мора да се одигра је", broj_predstava);
