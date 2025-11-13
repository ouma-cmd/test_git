const prompt = require("prompt-sync")({sigint:true})
let euro= Number(prompt ("viellez le numbre"));
const taux = 10.61 ;

const dirham = euro * taux ;

console.log (dirham) ;