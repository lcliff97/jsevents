const myBox = document.getElementById("myBox");

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "red";
  event.target.textContent = "OUCH!! 🫠";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Turn back now... 🤨";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me! 😁";
});
