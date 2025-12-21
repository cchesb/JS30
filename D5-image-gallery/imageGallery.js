// I have to add the class of open to each panel class when it's clicked
// Once the transition ends, I have to then put the class of open-active to the panel
const panel = document.querySelectorAll(".panel");

function openImage(){
    this.classList.toggle("open")
}

function transitionEnds(e){
    (e.propertyName.includes("flex") && this.classList.toggle("open-active"))
}

panel.forEach((pan) => pan.addEventListener('click', openImage))
panel.forEach((pan) => pan.addEventListener('transitionend', transitionEnds))