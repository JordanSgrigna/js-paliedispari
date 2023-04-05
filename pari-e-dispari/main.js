// PROGRAMMA PRINCIPALE
let userOddEvenQuestion = prompt("Scegli pari o dispari");
let userOddEvenChoice = userOddEvenChoiceValidation(userOddEvenQuestion);
console.log(userOddEvenChoice);

let userStringQuestion = prompt("Scegli un numero tra 1 e 5");
let userNumberChoice = userNumberValidation1_5AndConvertToNumber(userStringQuestion);
console.log(userNumberChoice);

let computerNumber = randomNumberGenerator1_5();
console.log(computerNumber);

let evenOddSommaNumeri;

let oddEvenGameResult = oddEvenGame();
console.log(oddEvenGameResult);















// FUNZIONI

function userOddEvenChoiceValidation(stringa){
    stringa = stringa.toLowerCase();
    while(stringa !== "pari" && stringa !== "dispari"){
        stringa = prompt("Scegli pari o dispari");
    }
}


function userNumberValidation1_5AndConvertToNumber(stringa){
    // Validazione numero compreso tra 1 e 5
    while(isNaN(stringa) || (stringa < 1 || stringa > 5)){
        stringa = prompt("Reinserisci un numero compreso tra 1 e 5")
    };

    let userNumber = parseInt(stringa);
    return userNumber;
}


function randomNumberGenerator1_5(){
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}


function oddEvenGame(){
    let sommaNumeri = computerNumber + userNumberChoice;

    if(sommaNumeri%2 == 0 ){
        evenOddSommaNumeri = "pari"

    } else if(sommaNumeri%2 == 1){
        evenOddSommaNumeri = "dispari"
    }

    if(evenOddSommaNumeri == userOddEvenChoice){
        return "Hai vinto"
    }else{
        return "Hai perso"
    }

}
    