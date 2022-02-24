let num = document.getElementById("num");

let arr = [231.685, 231.655, 231.511];

let i = 0;

while(i<=2){

    if(i==0){
    let newEL = document.createElement("div");
    newEL.innerHTML = arr[0];
    document.body.appendChild(newEL);
}

    if(i==1){
    let newEL = document.createElement("div");
    newEL.innerHTML = arr[1];
    document.body.appendChild(newEL);
}

    if(i==2){
    let newEL = document.createElement("div");
    newEL.innerHTML = arr[2];
    document.body.appendChild(newEL);
}

    i+=1;
}