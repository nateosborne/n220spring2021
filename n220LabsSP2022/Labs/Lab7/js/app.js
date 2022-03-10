let txt = document.getElementById("txt");
let result = document.getElementById("result");
let word = "";
let arr = "";

function vowel(){
    word = "";
    word = txt.value;
    word = word.split("");
    // let vow = ["a","e","i","o","u"];
    arr = "";

    for (i=0; i<=word.length-1; i++){
            if (word[i] != "a" && word[i] != "e" && word[i] != "i" && word[i] != "o" && word[i] != "u"){
                arr += word[i];
            }
    }
    result.innerHTML = arr;
}