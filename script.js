
  function fetchdata(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => adviceGenerator(data));
  }
const adviceNumber = document.querySelector(".advice-number")
const adviceText = document.querySelector(".advice-text")
function adviceGenerator(data) {
  adviceNumber.innerHTML = `
  Advice #${data.slip.id}
  `
  adviceText.innerHTML = `...${data.slip.advice}
  `
}

const btnramdom = document.querySelector('.ramdon-btn')

btnramdom.addEventListener("click", fetchdata)

fetchdata()