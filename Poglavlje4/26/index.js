function obim_kruga(r) {
  const obim = 2 * r * Math.PI;

  return obim;
}

const N = Number.parseInt(prompt("Унеси број између 1 и 10:"));

for (let precnik = 1; precnik <= N; precnik++) {
  console.log(`Обим круга пречника ${precnik}cm износи ${obim_kruga(precnik)}cm.`);
}
