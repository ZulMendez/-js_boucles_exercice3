// - ## Exo 1 
//     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
//     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'à 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

// let multiplicateur = 5;

// for (let i = 0; i <= 9; i++) {
//     const element = i * multiplicateur;
//     console.log(`${multiplicateur} * ${i} = ${element}`);
// }

// - ## Exo 2
//     ## La même chose sauf qu'on incrémente par deux

// let multiplicateur = 5;

// for (let i = 1; i <= 9; i+=2) {
//     console.log(`${multiplicateur} * ${i} = ${element}`);
// }

// - ## Exo 3
//     ## Faire une boucle décendante pour les nombres pairs de 20 à 0
//         ## Ex: 20-18-16, ect.

// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);
// }

// - ## Exo 4
//     ## Créer un tableau avec les prénoms des gens de la classe
//     ## Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'

let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]
let longPrenoms = [];
let petitPrenoms = [];

coding16.forEach((element, i) => {
    console.log(element);
    if (coding16[i].length > 5) {
        longPrenoms.push(element);
    } else {
        petitPrenoms.push(element);
    }
});
console.log(longPrenoms);
console.log(petitPrenoms);
// console.log(coding16[1].length > 5);
// - ## Exo 5
//     ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     ## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes

let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
let grosseSommes = [];
let petitSommes = [];

// pas propre
// sommes.forEach((element, i ) => {
//     if (sommes[i] >60) {
//         grosseSommes.push(element)
//         sommes.splice(element, 1)
//     } else {
//         petitSommes.push(element)
//         sommes.splice(element, 1)
//     }
// });
// console.log(grosseSommes);
// console.log(petitSommes);

// propre
for (let i = 0; i < sommes.length; i++) {
    if (sommes[i] > 60) {
        grossesSommes.push(sommes[i])
    } else {
        petiteSommes.push(sommes[i])
    }
    sommes.splice(i, 1)
    i--
}

console.log(grossesSommes);
console.log(petiteSommes);
console.log(sommes);

// - ## Exo 6
//     ##  Voici un tableau : 
let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

//  pas propre
// donnees.forEach((element, i)  => {
//     if (typeof el == 'string') {
//         typeString.push(element);
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//     } else if (typeof el == 'number') {
//         typeNumber.push(element);
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//     } else if (typeof el == 'object') {
//         typeObject.push(element);
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//     } else {
//         typeAutre.push(element);
//         console.log(`${typeof el} = ${el} -> à l'indice ${i}`);
//     }
// });

// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);
// console.log(donnees);

//v2 plus propre
for (let i = 0; i < donnees.length; i++) {
    if (typeof donnees[i] == 'string') {
        console.log(`${typeof donnees[i]} = ${donnees[i]} -> à l'indice ${i}`);
        typeString.push(donnees[i])

    } else if (typeof donnees[i] == 'number') {
        console.log(`${typeof donnees[i]} = ${donnees[i]} -> à l'indice ${i}`);
        typeNumber.push(donnees[i])

    } else if (typeof donnees[i] == 'object') {
        console.log(`${typeof donnees[i]} = ${donnees[i]} -> à l'indice ${i}`);
        typeObject.push(donnees[i])

    } else {
        console.log(`${typeof donnees[i]} = ${donnees[i]} -> à l'indice ${i}`);
        typeAutre.push(donnees[i])
    }
    donnees.splice(i, 1)
    i--
}

console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);
console.log(donnees);

//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.
