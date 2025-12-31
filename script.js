document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  canvas.id = "hoa-dao"; // Giữ ID cũ hoặc đổi tùy bạn
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  let flowers = [];
  const flowerCount = 50;

  for (let i = 0; i < flowerCount; i++) {
    const type = Math.random() > 0.25 ? 'dao' : 'mai';
    
    flowers.push({
      type: type,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 3, // Kích thước nhỏ xinh
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 0.5 - 0.25,
      angle: Math.random() * Math.PI * 2,
      spinSpeed: Math.random() * 0.02 - 0.01,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.04 + 0.02
    });
  }

  function drawFlower(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);

    // Thiết lập màu sắc dựa trên loại hoa
    let petalColor, stamenColor;
    if (p.type === 'dao') {
      petalColor = "rgba(255, 204, 213, 0.9)";
      stamenColor = "rgba(255, 160, 179, 0.9)";
    } else {
      petalColor = "rgba(255, 215, 0, 0.95)";
      stamenColor = "rgba(255, 100, 0, 0.7)";
    }

    // Vẽ 5 cánh hoa
    ctx.fillStyle = petalColor;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.ellipse(p.size * 0.6, 0, p.size * 0.6, p.size * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.rotate((Math.PI * 2) / 5);
    }

    // Vẽ nhụy hoa
    ctx.beginPath();
    ctx.fillStyle = stamenColor;
    ctx.arc(0, 0, p.size * 0.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    flowers.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.wobble) * 0.4;
      p.angle += p.spinSpeed;
      p.wobble += p.wobbleSpeed;

      if (p.y > canvas.height + 10) {
        p.y = -15;
        p.x = Math.random() * canvas.width;
      }
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.x < -10) p.x = canvas.width + 10;

      drawFlower(p);
    });

    requestAnimationFrame(update);
  }

  setTimeout(() => {
    canvas.classList.add("show");
    update();
  }, 1000);
});

function toggleHonor() {
  const box = document.getElementById("honorContent");
  box.style.display = box.style.display === "none" ? "block" : "none";
}
