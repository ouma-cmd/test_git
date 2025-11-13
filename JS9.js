const prompt = require("prompt-sync")({sigint:true})
const km = Number(prompt ("viellez le numbre"));

const mile = km / 1.609 ;

console.log (km + mile) ;