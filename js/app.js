console.log ('Palidroma')

//****PALIDROMA****/

//1.Chiedere all’utente di inserire una parola

let userWord = prompt("Inserisci una parola:")


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

if (isPalindrome(userWord)) {
    console.log("La parola che hai inserito è palindroma.");
  } else {
    console.log("La parola che hai inserito non è palindroma.");
  }

//4. Lo comunichiamo anche nella pagina
let risultato = isPalindrome(userWord) ? "La parola che hai inserito è palindroma." : "La parola che hai inserito non è palindroma.";
document.getElementById("risultato").innerHTML = risultato;




/******PARI E DISPARI*******/

//1.L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.



//2.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).


//3.Sommiamo i due numeri


//4.Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)


//5.Comunichiamo all’utente chi ha vinto.