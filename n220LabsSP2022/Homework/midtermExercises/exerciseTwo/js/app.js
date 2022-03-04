let scoreNum = 0;

let rock = document.getElementById("box");
rock.innerHTML = "rock";
rock.style.backgroundColor = "#ebebeb";
rock.style.width = "50px";
rock.style.height = "30px";
rock.style.position = "absolute";

let paper = document.getElementById("box2");
paper.innerHTML = "paper";
paper.style.backgroundColor = "#fafafa";
paper.style.width = "50px";
paper.style.height = "30px";
paper.style.position = "absolute";
paper.style.top = "35px";

let scissors = document.getElementById("box3");
scissors.innerHTML = "scissors";
scissors.style.backgroundColor = "#d6d6d6";
scissors.style.width = "50px";
scissors.style.height = "30px";
scissors.style.position = "absolute";
scissors.style.top = "65px";

let guard = document.getElementById("box4");
guard.innerHTML = "guard";
guard.style.backgroundColor = "#a6a6a6";
guard.style.width = "50px";
guard.style.height = "30px";
guard.style.position = "absolute";
guard.style.top = "95px";

let score = document.getElementById("newDiv");
score.style.position = "absolute";
score.style.left = "100px";
score.style.height = "50px";
score.style.width = "50px";
score.style.backgroundColor = "#525252";
score.style.color = "#ffffff"
score.innerHTML = scoreNum;
document.body.appendChild(score);

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// 1 is rock
// 2 is paper
// 3 is scissors

function change1(){
    console.log(getRandomNum(1,3));

    if (getRandomNum() == 1){
        scoreNum =+ 0;
    }

    if (getRandomNum() == 2){
        scoreNum =- 1;
    }

    if (getRandomNum() == 3){
        scoreNum =+ 1;
    }
}

function change2(){
    console.log(getRandomNum(1,3));

    if (getRandomNum() == 1){
        scoreNum =+ 1;
    }

    if (getRandomNum() == 2){
        scoreNum =+ 0;
    }

    if (getRandomNum() == 3){
        scoreNum =- 1;
    }
}

function change3(){
    console.log(getRandomNum(1,3));

    if (getRandomNum() == 1){
        scoreNum =- 1;
    }

    if (getRandomNum() == 2){
        scoreNum =+ 1;
    }

    if (getRandomNum() == 3){
        scoreNum =+ 0;
    }
}

function change4(){
    scoreNum =- .5;
}