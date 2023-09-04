const x = 1;
console.log("x:", x);

const y = "2";
console.log("y:", y);

console.log("Тип података променљиве x је:", typeof x);
console.log("Тип података променљиве y је:", typeof y);

const z = Number.parseInt(y);

console.log("z:", z);
console.log("Тип података променљиве z је:", typeof z);

const a = Number.parseInt("Ovo nije celi broj");

console.log("a:", a);
console.log("Тип података променљиве a је:", typeof a);

console.log("Да ли променљива a садржи неодређену бројчану вредност:", Number.isNaN(a));
console.log("Да ли променљива x садржи неодређену бројчану вредност:", Number.isNaN(x));
