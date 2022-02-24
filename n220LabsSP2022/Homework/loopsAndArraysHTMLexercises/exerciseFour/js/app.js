let num = document.getElementById("num");

let arr = ["cars", "games", "tennis", "tv", "pacers"];

let i = 0;

while(i<=4){

    if(i==0){
    let newEL = document.createElement("div");
    newEL.innerHTML = arr[0] + " are one of my favorite things";
    document.body.appendChild(newEL);
}

    if(i==1){
    let newEL = document.createElement("div");
    newEL.innerHTML = arr[1] + " are one of my favorite things";
    document.body.appendChild(newEL);
}

    if(i==2){
    let newEL = document.createElement("div");
    newEL.innerHTML = arr[2] + " is one of my favorite things";
    document.body.appendChild(newEL);
}

    if(i==3){
    let newEL = document.createElement("div");
    newEL.innerHTML = arr[3] + " is one of my favorite things";
    document.body.appendChild(newEL);
}

    if(i==4){
    let newEL = document.createElement("div");
    newEL.innerHTML = "the " + arr[4] + " are one of my favorite things";
    document.body.appendChild(newEL);
}

    i+=1;
}