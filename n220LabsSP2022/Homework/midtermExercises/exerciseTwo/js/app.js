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

let randomNum = 0;

function getRandomNum() {
    randomNum = (Math.floor(Math.random() * 3) + 1);
  }

// 1 is rock
// 2 is paper
// 3 is scissors

function change1(){
    getRandomNum();

    if (randomNum == 1){
        scoreNum =+ 0;
        score.innerHTML = scoreNum;
    }

    if (getRandomNum() == 2){
        scoreNum =- 1;
        score.innerHTML = scoreNum;
    }

    if (getRandomNum() == 3){
        scoreNum =+ 1;
        score.innerHTML = scoreNum;
    }
}

function change2(){
    getRandomNum();

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
    getRandomNum();

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
    score.innerHTML = scoreNum;
}