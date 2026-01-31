const items = document.querySelectorAll('.timeline-item');

function showTimeline() {
  const trigger = window.innerHeight * 0.85;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showTimeline);
showTimeline();

(function () {
  const colors = ["#ff4d4d", "#ffd700", "#ff9100"];

  setInterval(() => {
    const item = document.createElement("div");
    item.className = "birthday-fall";

    item.style.left = Math.random() * 100 + "vw";
    item.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(item);

    let y = -20;
    const speed = 1 + Math.random() * 1.5;

    function fall() {
      y += speed;
      item.style.transform = `translateY(${y}px)`;

      if (y < window.innerHeight + 40) {
        requestAnimationFrame(fall);
      } else {
        item.remove();
      }
    }

    fall();
  }, 200);
})();
