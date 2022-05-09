// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//-----FUNCTION------

//3. genera un numero random tra 1 e 5 della CPU
function getRndNumber(min, max) {
    return Math.floor((Math.random() * (max, min + 1) + min);
}

//5. stabilisci tramite funzione se la somma e pari o dispari 
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } 
    return false;
}

//-------MAIN-------

//1. chiedo all utente di scegliere un numero pari e dispari 
const chooseUser = prompt("inserisci pari o dispari");

//2. chiedi di scegliere tra pari e dispari tra 1 e 5
const chooseNumber = Number(prompt("inserisci un numero tra 1 e 5"));

//3. generiamo un numero random per la CPU
const cpuRandom = getRndNumber(1, 5);

//4. somma i 2 numeri
const sum = cpuRandom + chooseNumber;

//5. verifico se la somma è pari o dispari 
const result = isEven(sum)

//6. stabilisci chi ha vinto
if (result === chooseUser){
    alert("Hai vinto")
} alert ("hai perso")