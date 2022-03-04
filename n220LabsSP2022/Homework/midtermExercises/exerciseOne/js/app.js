let div = document.getElementById("box");

div.innerHTML = "red";
div.style.backgroundColor = "#ff0000";
div.style.width = "50px";
div.style.height = "30px";
div.style.position = "absolute";

let div2 = document.getElementById("box2");

div2.innerHTML = "purple";
div2.style.backgroundColor = "#d000ff";
div2.style.width = "50px";
div2.style.height = "30px";
div2.style.position = "absolute";
div2.style.top = "30px";

let div3 = document.getElementById("box3");

div3.innerHTML = "blue";
div3.style.backgroundColor = "#0095ff";
div3.style.width = "50px";
div3.style.height = "30px";
div3.style.position = "absolute";
div3.style.top = "60px";

let div4 = document.getElementById("box4");

div4.innerHTML = "yellow";
div4.style.backgroundColor = "#ffe100";
div4.style.width = "50px";
div4.style.height = "30px";
div4.style.position = "absolute";
div4.style.top = "90px";

let div5 = document.getElementById("box5");

div5.innerHTML = "green";
div5.style.backgroundColor = "#00ff62";
div5.style.width = "50px";
div5.style.height = "30px";
div5.style.position = "absolute";
div5.style.top = "120px";

let div6 = document.getElementById("box6");

div6.innerHTML = "orange";
div6.style.backgroundColor = "#ff8c00";
div6.style.width = "50px";
div6.style.height = "30px";
div6.style.position = "absolute";
div6.style.top = "150px";


function change1(){
    div.style.fontWeight = "bold";
    div2.style.fontWeight = "normal";
    div3.style.fontWeight = "normal";
    div4.style.fontWeight = "normal";
    div5.style.fontWeight = "normal";
    div6.style.fontWeight = "normal";

    div.style.backgroundColor = "#ff8787";
    div2.style.backgroundColor = "#d000ff";
    div3.style.backgroundColor = "#0095ff";
    div4.style.backgroundColor = "#ffe100";
    div5.style.backgroundColor = "#00ff62";
    div6.style.backgroundColor = "#ff8c00";

    newEl.innerHTML += "red ";
}

function change2(){
    div2.style.fontWeight = "bold";
    div.style.fontWeight = "normal";
    div3.style.fontWeight = "normal";
    div4.style.fontWeight = "normal";
    div5.style.fontWeight = "normal";
    div6.style.fontWeight = "normal";

    div2.style.backgroundColor = "#eb9cff";
    div.style.backgroundColor = "#ff0000";
    div3.style.backgroundColor = "#0095ff";
    div4.style.backgroundColor = "#ffe100";
    div5.style.backgroundColor = "#00ff62";
    div6.style.backgroundColor = "#ff8c00";

    newEl.innerHTML += "purple ";
}

function change3(){
    div3.style.fontWeight = "bold";
    div.style.fontWeight = "normal";
    div2.style.fontWeight = "normal";
    div4.style.fontWeight = "normal";
    div5.style.fontWeight = "normal";
    div6.style.fontWeight = "normal";

    div3.style.backgroundColor = "#7ac1ff";
    div.style.backgroundColor = "#ff0000";
    div2.style.backgroundColor = "#d000ff";
    div4.style.backgroundColor = "#ffe100";
    div5.style.backgroundColor = "#00ff62";
    div6.style.backgroundColor = "#ff8c00";

    newEl.innerHTML += "blue ";
}

function change4(){
    div4.style.fontWeight = "bold";
    div.style.fontWeight = "normal";
    div2.style.fontWeight = "normal";
    div3.style.fontWeight = "normal";
    div5.style.fontWeight = "normal";
    div6.style.fontWeight = "normal";

    div4.style.backgroundColor = "#fff385";
    div.style.backgroundColor = "#ff0000";
    div2.style.backgroundColor = "#d000ff";
    div3.style.backgroundColor = "#0095ff";
    div5.style.backgroundColor = "#00ff62";
    div6.style.backgroundColor = "#ff8c00";

    newEl.innerHTML += "yellow ";
}

function change5(){
    div5.style.fontWeight = "bold";
    div.style.fontWeight = "normal";
    div2.style.fontWeight = "normal";
    div3.style.fontWeight = "normal";
    div4.style.fontWeight = "normal";
    div6.style.fontWeight = "normal";

    div5.style.backgroundColor = "#85ffa3";
    div.style.backgroundColor = "#ff0000";
    div2.style.backgroundColor = "#d000ff";
    div3.style.backgroundColor = "#0095ff";
    div4.style.backgroundColor = "#ffe100";
    div6.style.backgroundColor = "#ff8c00";

    newEl.innerHTML += "green ";
}

function change6(){
    div6.style.fontWeight = "bold";
    div.style.fontWeight = "normal";
    div2.style.fontWeight = "normal";
    div3.style.fontWeight = "normal";
    div4.style.fontWeight = "normal";
    div5.style.fontWeight = "normal";

    div6.style.backgroundColor = "#ffc685";
    div.style.backgroundColor = "#ff0000";
    div2.style.backgroundColor = "#d000ff";
    div3.style.backgroundColor = "#0095ff";
    div4.style.backgroundColor = "#ffe100";
    div5.style.backgroundColor = "#00ff62";

    newEl.innerHTML += "orange ";
}

let newEl = document.getElementById("newDiv");
newEl.style.position = "absolute";
newEl.style.left = "100px";
newEl.style.height = "1000px";
newEl.style.width = "1000px";
document.body.appendChild(newEl);