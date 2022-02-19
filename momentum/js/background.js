const images = [
    "755403_534690_5413.jpeg",
    "57590615514306754.jpeg",
    "57590615514306757.jpeg",
    "57590615514306759.jpeg",
    "575906155143067510.jpeg"
]


const todaysImage = images[Math.floor((Math.random() * images.length))]

const bgImage = document.createElement("img")
bgImage.src = `img/${todaysImage}`

document.body.appendChild(bgImage)


