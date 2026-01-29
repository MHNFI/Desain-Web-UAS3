document.addEventListener("DOMContentLoaded", () => {

  // Fade body
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.2s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });

  // Animasi teks
  document.querySelectorAll(".text p").forEach((p, i) => {
    p.style.opacity = "0";
    p.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
      p.style.opacity = "1";
    }, 700 + i * 600);
  });

  // Zoom image
  document.querySelectorAll(".zoom-img").forEach((img) => {
    let zoom = false;
    img.style.cursor = "pointer";
    img.style.transition = "transform 0.4s ease";

    img.addEventListener("click", () => {
      img.style.transform = zoom ? "scale(1)" : "scale(1.7)";
      zoom = !zoom;
    });
  });

  // Welcome screen
  const konten = document.getElementById("main-content");
  if (!konten) return;

  konten.style.display = "none";

  const welcome = document.createElement("div");
  welcome.innerHTML = `
    <h1>WELCOME IN</h1>
    <p><strong>Lancar Makmur Meuble</strong></p>
    <button>Masuk Website</button>
  `;

  Object.assign(welcome.style, {
    position: "fixed",
    inset: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #80a5bcff, #1790cdff)",
    zIndex: "9999",
    textAlign: "center"
  });

  const btn = welcome.querySelector("button");
  Object.assign(btn.style, {
    marginTop: "20px",
    padding: "14px 40px",
    border: "none",
    borderRadius: "30px",
    background: "#fff",
    color: "#1790cdff",
    fontSize: "16px",
    cursor: "pointer"
  });

  document.body.appendChild(welcome);

  btn.addEventListener("click", () => {
    welcome.remove();
    konten.style.display = "block";
    konten.style.opacity = "0";
    konten.style.transition = "opacity 0.8s ease";

    requestAnimationFrame(() => {
      konten.style.opacity = "1";
    });
  });

});
