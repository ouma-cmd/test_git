const prompt=require("prompt-sync")({sigint:true});
const nam = prompt("veuillez entre votre nom :") ;
const prenom = prompt("veuillez entre votre prenom :") ;
const age = prompt("veuillez entre votre age :") ;
const sex = prompt("veuillez entre votre sex :") ;
const nmbrtelephon = prompt("veuillez entre votre numéro de telephon :") ;


console.log("nom:" +nam );
console.log("prenom:" +prenom );
console.log("age:" +age );
console.log("sex:" +sex );
console.log("numero de telephon:" +nmbrtelephon );
