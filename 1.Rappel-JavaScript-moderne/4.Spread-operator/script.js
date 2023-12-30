/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/
const array = [1,2,3, {a: 5}]; // les objets sont des valeurs de références et non pas des valeurs primitives

console.log(...array);

const shallowArrayCopy = [...array, 4,5,6];
console.log(shallowArrayCopy);
array[3].a = 555;
console.log(shallowArrayCopy);

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.
const obj = {
    name: "Laura",
    age: 26
}

const shallowObjCopy = {...obj, dogName: "Tim"};
console.log(shallowObjCopy);

const shallowObjCopy2 = {...obj, name: "Anna"};
console.log(shallowObjCopy2);


// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."
const strCopyArray = [...str];
console.log(strCopyArray);

