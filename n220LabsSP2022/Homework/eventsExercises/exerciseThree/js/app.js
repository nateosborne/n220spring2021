function answer(event){
    let cardAnswer = event.target.getAttribute("data-attribute");
    event.target.innerHTML = cardAnswer;
    console.log(cardAnswer);
}