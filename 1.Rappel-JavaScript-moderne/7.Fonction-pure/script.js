/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :
    1. Elle retourne toujours la même chose en fonction des mêmes arguments fournis.
    2. Elle n'utilise aucune valeurm mutable et n'a pas d'effets secondaires en dehors de son bloc.

*/

// exemple de fonction pure
function add(a,b) {
    return a+b;
}

console.log(add(10,10));
console.log(add(10,10));
console.log(add(10,10));
console.log(add(10,10));
console.log(add(10,10));
// retourne toujours la même valeur

let VAT = 20;
function getFinalPrice(price){
    return price * (100 + VAT) /100
}

console.log(getFinalPrice(100));
console.log(getFinalPrice(100));
console.log(getFinalPrice(100));
// la valeur de VAT peut muter, elle est extérieure à la fonction, qui est donc impure
// si VAT est passé en paramètre, alors la fonction est pure
// si on utilise une const au lieu d'un let, c'est une fonction pure