const milenin_prvi_dan = 3.77;
const petrov_prvi_dan = 3 * milenin_prvi_dan;

const petrov_drugi_dan = 8.34;
const milenin_drugi_dan = 2 * petrov_drugi_dan;

const milena_ukupno = milenin_drugi_dan + milenin_drugi_dan;
const petar_ukupno = petrov_prvi_dan + petrov_drugi_dan;

if (milena_ukupno > petar_ukupno) {
  console.log("Милена је убрала више:", milena_ukupno, "kg");
} else {
  console.log("Петар је убрао више:", petar_ukupno, "kg");
}
