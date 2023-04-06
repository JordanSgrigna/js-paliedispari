// -------- PROGRAMMA PRINCIPALE ---------------

// Richiesta dell'input dall'utente
let userString = prompt("Quale numero o parola vuoi verificare?");
let palindromeCheck = secondPalinCheck(userString);
console.log(palindromeCheck);



// --------------------------------------------------------

//-------------- FUNZIONI ---------------------------------

function firstPalinCheck(stringa){
    //Trasformo la stringa dell'utente in minuscolo in caso ci siano maiuscole
    stringa = stringa.toLowerCase();
    //La stringa viene convertita in array
    let userStringIntoArray = stringa.split("");
    //Gli elementi dell'array vengono messi al contrario
    let singleDigitArrayReversed = userStringIntoArray.reverse();
    //L'array viene convertito in stringa
    let userStringJoined = singleDigitArrayReversed.join("");

    if(stringa == userStringJoined){
        return "Palindromo"
    }

    return "Non è palindromo"
}



function secondPalinCheck(stringa){
    stringa = stringa.toLowerCase();
    //Lunghezza della stringa
    let stringLength = string.length;

    for(let i = 0; i < Math.floor(stringLength / 2); i++){
        //Check delle lettere uguali alla posizione opposta. (stringLength - 1 -i) presa su internet.
        if(stringa[i] !== stringa[stringLength - 1 - i]){
            return "Non è palindromo"
        }

    }

    return "Palindromo"
    

}