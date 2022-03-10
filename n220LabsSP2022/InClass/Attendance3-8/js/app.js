let txt = document.getElementById("txt");
let result = document.getElementById("result");

function triple(){
    let userName = txt.value;

    for(i=0;i<3;i++){
        let val = `${userName}`;
        result.innerHTML += val;
        txt.value = "";
    }

}