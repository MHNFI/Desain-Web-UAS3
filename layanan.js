document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  const body = document.body

  if (!form) return

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    form.style.display = "none"
    showMsg()
  })

  const showMsg = () => {
    const d = document.createElement("div")

    d.innerHTML = `
      <h2>Terimakasih Atas Kritik dan saranya</h2>
      <p>Semoga kritik dan saran anda dapat membantu mengembangkan pelayanan kami</p>
      <button>Kembali</button>
    `

    Object.assign(d.style, {
      position: "fixed",
      inset: "0",
      background: "rgba(99, 117, 233, 0.9)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9999",
      opacity: "0",
      transition: "opacity 0.4s ease"
    })

    body.appendChild(d)

    requestAnimationFrame(() => {
      d.style.opacity = "1"
    })

    d.querySelector("button").onclick = () => {
      d.style.opacity = "0"

      setTimeout(() => {
        d.remove()
        form.reset()
        form.style.display = "block"
      }, 400)
    }
  }
})

document.addEventListener("DOMContentLoaded", () => {

  const page = document.querySelector(".fade-page");
  if (page) {
    requestAnimationFrame(() => {
      page.classList.add("show");
    });
  }
  
  document.querySelectorAll(".fade-text").forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, 500 + i * 400);
  });

});
