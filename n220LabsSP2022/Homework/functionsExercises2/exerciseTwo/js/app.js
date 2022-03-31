let number = document.getElementById("number");

function random(){
    let num = Math.floor((Math.random() * 10) + 1);
    console.log(num);
    number.innerHTML = num;
}