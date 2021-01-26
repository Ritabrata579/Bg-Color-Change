const colors = ["red", "blue","skyblue","green","gray", "yellow", "pink","orange","purple", "violet","#d8b182","#b30061"];
const buttonn = document.getElementById('btn');
const color = document.querySelector(".color");
function change(){
    const randomNumber = getRandomNumber();
    console.log( randomNumber);
    document.body.style.backgroundColor = colors[ randomNumber];
    color.textContent = colors[randomNumber];
}
function getRandomNumber(){
    return Math.floor(Math.random() *colors.length);
}



