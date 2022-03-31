let txt = document.getElementById("txt");
let output = document.getElementById("output");

function clean(){
    let word = txt.value;
    for (i=0;i<=word.length-1;i++){
        if (word[i]=="#"){
            newWord = word.replace(/#/g,"");
            console.log(newWord);
        }
    }
}