// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50. */
/* 
function somma (a, b) {
    if (a === 50 || b === 50 || a + b === 50) {
        return true;
    } else return false;
}

console.log(somma(25, 25));
 */

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

/* function lessletter (stringa, position){
    let arrDiLettere = stringa.split("")
    arrDiLettere.splice(position, 6)
    return arrDiLettere.join("")
}

console.log (lessletter("carismatico")) */

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.
/* 
function value(num1, num2) {
  if ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) {
    if ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)) {
      return true;
    }
  }
  return false;
}

console.log (value(40, 77)); */

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.
/* 
function checkCityName(cityName) {
    if (cityName.startsWith("Los") || cityName.startsWith("New")) {
      return cityName;
    } else {
      return false;
    }
  }  
  console.log(checkCityName("Rome")); // Output: "Los Angeles"
  console.log(checkCityName("New York")); // Output: "New York"
  console.log(checkCityName("Los Angeles")); // Output: false */
  

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L’array deve essere passato come parametro.
/* 
function calcolaSommaArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
      somma += array[i];
    }
    return somma;
  }
  let arrayNumeri = [6, 2, 8, 4, 5];
  let somma = calcolaSommaArray(arrayNumeri);
  console.log(somma); */
  

// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.
/* 
function checkArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 1 || array[i] === 3) {
        return false;
      }
    }
    return true;
  }  

let prova1 = [1, 3, 6];
console.log(checkArray(prova1));

let prova2 = [5, 7, 9];
console.log(checkArray(prova2));

let prova3 = [2, 4, 6];
console.log(checkArray(prova3)); */

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”
/* 
function determinaTipoAngolo(gradi) {
    if (gradi < 90) {
      return "acuto";
    } else if (gradi === 90) {
      return "retto";
    } else if (gradi > 90 && gradi < 180) {
      return "ottuso";
    } else if (gradi === 180) {
      return "piatto";
    } else {
      return "Angolo non valido";
    }
  }
  console.log(determinaTipoAngolo(40)); 
  console.log(determinaTipoAngolo(90)); 
  console.log(determinaTipoAngolo(150)); 
  console.log(determinaTipoAngolo(180)); 
  console.log(determinaTipoAngolo(230));
     */

// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

/* function newAcronimo(frase) {
    let parole = frase.split(" ");
    let acronimo = "";
    for (let i = 0; i < parole.length; i++) {
      let parola = parole[i];
      acronimo += parola.charAt(0).toUpperCase();
    }
    return acronimo;
  }
  
  let frase = "Federal Bureauof Investigation";
  let acronimo = newAcronimo(frase);
  console.log(acronimo);  */
  