const prompt=require("prompt-sync")({sigint:true})
let number= prompt( "number");

let inverser = Number(number.split("").reverse().join(""));

console.log("number",inverser);