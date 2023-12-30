// console.log(add(2,2));
/* 
    Redécouvrons ensemble les fonctions fléchées et leurs différences avec les fonctions classiques.
*/


/* 
    1. Syntaxe.
    La syntaxe est moins chargée, pouvant ainsi être plus facilement utilisée en tant qu'argument, notamment en tant que fonction callback.
*/

function add(a,b) {
    return a+b;
}

const add2 = (a,b) => a+b; 
// console.log(add2(2,3));

const numbers = [1,2,3];

// numbers.forEach(el => console.log(el))
/*
fait extactement la même chose que :
        numbers.forEach(function(el) {return console.log(el)})
*/

/* 
    2. Le mot clé this.

    Les fonctions classiques créent un mot clé this lors de leur exécution, en fonction de l'objet qui les appelle.
    Si elles ne sont pas appelées par un objet, this est automatiquement égal à window (l'objet global).

    Les fonctions fléchées ne créent pas de this, néanmoins elles peuvent lire le this d'une fonction classique si elles se situent dedans.
    Si elles ne sont pas dans l'environnement(donc contexte) une fonction classique, elle lisent le this de l'objet global, car elles sont dans le contexte d'execution global.
*/

const person = {
    age: 45,
    // getAge: function(){
    //     return this.age;
    // }
    getAge: function(){
        const arrowInsideClassic = () => {
            console.log("From arrow",this);
        } // La fonction fléchée se trouve à l'intérieur de la fonction classique. La fonction classique a un this. La fonction fléchée y a accès
        arrowInsideClassic();
        return this;
    },
    getArrowAge: () => this // retourne l'objet global (Window)
}
console.log(person.getAge());
console.log(person.getArrowAge());

// function foo() {
//     console.log(this);
// }
// foo();
// window.foo();

/* 
    3. arguments
    Même chose pour l'objet "arguments" qui est crée chez les fonctions classiques, mais pas les fonctions fléchées.
*/

function faz(){
    console.log(arguments); // liste des arguments
}

const foz = () => console.log(arguments);

faz(1,2,3,4,5);
foz(6,7,8,9,10)


/*
    Petit recap pour vous aider avec la valeur de this dans des fonctions classiques vs fléchées (hors fonction constructeur / usestrict)

    Fonction classique : 
    1. La fonction est appelée depuis un objet ? this = cet objet.
    2. La fonction n'est pas appelée depuis un objet ? this = objet global window.

    Fonction fléchée :
    1. La fonction fléchée se situe dans une fonction classique ? this = le this de la fonction classique.
    2. La fonction fléchée ne se situe pas dans une fonction classique ? this = objet global window.
*/