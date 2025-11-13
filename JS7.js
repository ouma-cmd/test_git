const prompt = require("prompt-sync")();
let rayon = parseInt(prompt("entrer rayon :"));
const pi = 3.14;
let cir = 2 * pi * rayon;
console.log("la circonference est : ",cir);