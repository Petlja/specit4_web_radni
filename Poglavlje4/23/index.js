const N = Number.parseInt(prompt("Унеси број N:"));
const M = Number.parseInt(prompt("Унеси број M:"));

let redovi = [];
let broj = 1;

for (let i = 0; i < N; i++) {
  let red = [];

  for (let j = 0; j < M; j++) {
    red.push(broj.toString());
    broj++;
  }

  red_niska = red.join(" ");
  redovi.push(red_niska);
}

console.log(`Матрица бројева ${N} X ${M} је:`);
console.log(redovi.join("\n"));
