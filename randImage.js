const randImage = document.querySelector("#rand-image")
const images = ["1.jpg", "2.jpg", "3.jpg"]

const selectedImage = images[Math.floor(Math.random() * images.length)]

const img = document.createElement("img")
img.setAttribute("src", `images/${selectedImage}`)

randImage.appendChild(img)