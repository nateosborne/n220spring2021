function onMouseClick(event){
    console.log("click");
    let color = event.target.getAttribute("data-color")
    event.target.style.backgroundColor = color;
}