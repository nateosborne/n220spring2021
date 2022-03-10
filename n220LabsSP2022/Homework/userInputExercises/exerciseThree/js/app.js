let txt = document.getElementById("txt");
let txt2 = document.getElementById("txt2");
let result = document.getElementById("result");

function password(){
    let userName = txt.value;
    let password = txt2.value;

    if (userName == "Username" && password == "Password"){
        result.innerHTML = "Success";
    }
    else{
        result.innerHTML = "Wrong Information";
    }
}