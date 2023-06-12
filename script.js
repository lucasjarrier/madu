document.addEventListener("DOMContentLoaded", function () {
  const heartsContainer = document.getElementById("hearts-container");

  for (let i = 0; i < 100; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heartsContainer.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  }
});
