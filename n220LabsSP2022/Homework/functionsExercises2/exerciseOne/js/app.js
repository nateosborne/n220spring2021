let txt = document.getElementById("txt");

function divisible(){
    let number = txt.value;
    if (number%7==0){
        console.log(number+" is divisble by 7");
    }

    else{
        console.log(number+" is not divisible by 7");
    }
}