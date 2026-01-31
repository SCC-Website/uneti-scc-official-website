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
  const items = [];

  function createItem() {
    const el = document.createElement("div");
    el.className = "birthday-fall";
    el.style.left = Math.random() * 100 + "vw";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(el);

    items.push({
      el,
      y: -20,
      speed: 1 + Math.random() * 1.5
    });
  }

  /* Tạo hạt mới */
  setInterval(createItem, 200);

  setInterval(() => {
    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i];
      item.y += item.speed;
      item.el.style.transform = `translateY(${item.y}px)`;

      if (item.y > window.innerHeight + 40) {
        item.el.remove();
        items.splice(i, 1);
      }
    }
  }, 30);
})();
