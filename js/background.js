const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bdImage = document.createElement("img");

bdImage.src = `img/${chosenImage}`;

document.body.appendChild(bdImage);
