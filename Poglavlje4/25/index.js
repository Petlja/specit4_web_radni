function povrsina_jednakostranicnog_trougla(a) {
  const povrsina = (a * a * Math.sqrt(3)) / 4;

  return povrsina;
}

const ivica = Number.parseFloat(prompt("Унеси ивицу једнакостраничног троугла:"));
console.log("Површина троугла је:", povrsina_jednakostranicnog_trougla(ivica));
