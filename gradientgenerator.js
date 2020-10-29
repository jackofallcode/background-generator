// let colorval = document.querySelectorAll("input")
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let bdy = document.querySelector("body")
let button1= document.querySelector(".button1")


setGradient()

function setGradient(){
    bdy.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
    css.textContent = bdy.style.background ;
}


color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + randomColor
    color2.value = "#" + randomColor2
    setGradient();
  }
  
  button1.addEventListener("click", setBg);
