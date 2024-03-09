const launchButton = document.getElementById("launch-btn");
const rocket = document.querySelector(".rocket");

launchButton.addEventListener("click", () => {
  rocket.classList.add("launch");

  setTimeout(() => {
    rocket.classList.remove("launch");
    rocket.style.top = "30%";
  }, 2000);
});