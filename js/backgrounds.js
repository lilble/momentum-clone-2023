const images = [
  "europe.jpeg",
  "europe2.jpeg",
  "oriental.jpeg",
  "starbucks.jpeg",
];

const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImage}`;

document.body.appendChild(bgImage);
