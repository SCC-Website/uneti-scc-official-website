document.addEventListener('contextmenu', event => event.preventDefault());

function toggleHonor() {
  const box = document.getElementById("honorContent");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

