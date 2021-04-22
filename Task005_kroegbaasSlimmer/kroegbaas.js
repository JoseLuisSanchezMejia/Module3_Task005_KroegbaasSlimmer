const age=18;
let clientAge=25;

if (clientAge>= age && clientAge<=25){
    console.log("Kom maar binnen. Je krijgt 50% korting!");}
else {
    console.log("sorry je krijgt geen korting");
}

const name="Sarah";
const name2="Bram";
let nameClient="Bob";
nameClient="Bram";

if (nameClient === name || nameClient=== name2){
    console.log("Je krijgt een gratis bier");}
else {
    console.log("Sorry je krijgt geen gratis biertje");
}

//hier demonstreer ik het resultaat van deelopdracht 3 met 3 variabelen
const totalAmount=25;
let AmountClient=60;
let AmountClientSurplus=AmountClient-totalAmount;


if (AmountClientSurplus >= 0 && AmountClientSurplus < 25){
console.log("Je krijgt gratis (vega)bitterballen");
} 
else if (AmountClientSurplus >= 25 && AmountClientSurplus <75){
    console.log("Je krijgt een gratis portie nacho");
} else if (AmountClientSurplus >= 75){
        console.log("Je krijgt gratis champagne!. Proost, op je gezondheid!");
        } 
else {console.log("Helaas, je krijgt geen feestelijke korting!");}

console.log(AmountClientSurplus);

//hier demonstreer ik het resultaat van deelopdracht 3 met 2 variabelen

if (AmountClient-totalAmount >= 0 && AmountClient-totalAmount < 25){
console.log("Je krijgt gratis (vega)bitterballen");
} 
else if (AmountClient-totalAmount >= 25 && AmountClient-totalAmount<75){
    console.log("Je krijgt een gratis portie nacho");
} else if (AmountClient-totalAmount >= 75){
        console.log("Je krijgt gratis champagne!. Proost, op je gezondheid!");
        } 
else {console.log("Helaas, je krijgt geen feestelijke korting!");}

console.log(AmountClientSurplus);