// -------- PROGRAMMA PRINCIPALE ---------------

// Richiesta dell'input dall'utente
let userString = prompt("Quale numero o parola vuoi verificare?");

let palindromeCheck = secondPalinCheck(userString);
console.log(palindromeCheck);



// --------------------------------------------------------

//-------------- FUNZIONI ---------------------------------

function firstPalinCheck(string){
    //Trasformo la stringa dell'utente in minuscolo in caso ci siano maiuscole
    userString = userString.toLowerCase();
    //La stringa viene convertita in array
    let userStringIntoArray = userString.split("");
    //La stringa viene messa al contrario
    let singleDigitArrayReversed = userStringIntoArray.reverse();
    //La stringa viene rimessa insieme
    let userStringJoined = singleDigitArrayReversed.join("");

    if(userString == userStringJoined){
        return "Palindromo"
    }

    return "Non è palindromo"
}



function secondPalinCheck(string){
    userString = userString.toLowerCase();
    //Lunghezza della stringa
    let stringLength = userString.length;

    for(let i = 0; i < stringLength; i++){
        //Check delle lettere sono uguali alla posizione opposta. (stringLength - 1 -i) presa su internet.
        if(userString[i] == userString[stringLength - 1 - i]){
            return "Palindromo"
        }

    }

    return "Non è palindromo"
    

}