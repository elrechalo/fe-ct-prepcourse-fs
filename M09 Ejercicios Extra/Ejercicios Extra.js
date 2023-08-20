/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arregloDeArreglos = [];
   for (const clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
      arregloDeArreglos.push([clave, objeto[clave]]);
      }
   }
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const letraCantidad = {};
   for (let i = 0; i < string.length; i++) {
      const letra = string[i];
      if (!letraCantidad[letra]) {
         letraCantidad[letra] = 1;
      } else {
      letraCantidad[letra]++;
      }
   }
   return letraCantidad;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   const mayusculas = [];
   const minusculas = [];
   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
      mayusculas.push(string[i]);
      } else {
      minusculas.push(string[i]);
      }
   }
   return mayusculas.join("") + minusculas.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const palabras = frase.split(" ");
   const palabrasInversas = []; 
   for (let i = 0; i < palabras.length; i++) {
      const palabraInversa = palabras[i].split("").reverse().join("");
      palabrasInversas.push(palabraInversa);
   }
   return palabrasInversas.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   const numeroString = numero.toString();
   const numeroInversoString = numeroString.split("").reverse().join("");
   if (numeroString === numeroInversoString) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let nuevoString = "";
   for (let i = 0; i < string.length; i++) {
      if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c") {
         nuevoString += string[i];
      }
   }
   return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const enComun = [];

   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         enComun.push(array1[i]);
      }
   }
   return enComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
