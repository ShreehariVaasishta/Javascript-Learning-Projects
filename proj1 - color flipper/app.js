const colors = [
    "green", "red", "rgba(133,122,200)", "#f15025", "#fabebe", "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#808080", "#ffffff", "#000000",
]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // get a random number between 0 and lenght of the colors array
    const randomNumber = getRandomNumer();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})


function getRandomNumer() {
    return Math.floor(Math.random() * colors.length);
}