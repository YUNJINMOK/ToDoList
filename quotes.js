const quotes = document.querySelector("#quotes")

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(data => {
    const word = data.slip.advice
    quotes.innerText = word
})