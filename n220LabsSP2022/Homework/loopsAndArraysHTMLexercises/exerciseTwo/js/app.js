let num = document.getElementById("num");

for(let i = 0; i <= 25; i++){

    num.innerHTML = i;

    if (i%3==0){
        num.innerHTML = "beep";
    }

    if (i%5==0){
        num.innerHTML = "bop";
    }

    if (i%3==0 && i%5==0){
        num.innerHTML = "beepbop";
    }

    let newEL = document.createElement("div");
    newEL.innerHTML = num.innerHTML;
    document.body.appendChild(newEL);
}