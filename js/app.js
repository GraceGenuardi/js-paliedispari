console.log ('Palidroma')

//****PALIDROMA****/

//1.Chiedere all’utente di inserire una parola

let parolaUtente = prompt("Inserisci una parola:")


//2.Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }


//3.Comunicare all’utente  se la parola che ha inserito è palindroma oppure no

if (isPalindrome(parolaUtente)) {
    console.log("La parola che hai inserito è palindroma.");
  } else {
    console.log("La parola che hai inserito non è palindroma.");
  }

//4. Lo comunichiamo anche nella pagina
let risultato = isPalindrome(parolaUtente) ? "La parola che hai inserito è palindroma." : "La parola che hai inserito non è palindroma.";
document.getElementById("risultato").innerHTML = risultato;




/******PARI E DISPARI*******/

//1.L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const scelta = prompt("Scegli: pari o dispari?");
const numero = parseInt(prompt("Inserisci un numero da 1 a 5"));



//2.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const numeroRandom = Math.floor(Math.random() * 5) + 1;
const sum = numero + numeroRandom ;

function isEven(number) {
  return number % 2 === 0;
}





