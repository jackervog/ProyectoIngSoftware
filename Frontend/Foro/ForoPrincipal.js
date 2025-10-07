// Abrir/cerrar ventana de "Haz una pregunta"
const preguntaBtn = document.getElementById("preguntaBtn");
const ventanaPregunta = document.getElementById("ventanaPregunta");

preguntaBtn.addEventListener("click", () => {
  ventanaPregunta.classList.toggle("activo");
});

// Abrir/cerrar campo de respuesta en cada publicación
const responderBtns = document.querySelectorAll(".responder");

responderBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const publicacion = btn.closest(".publicacion");
    const respuestaForm = publicacion.querySelector(".respuesta-form");

    if (respuestaForm.style.display === "flex") {
      respuestaForm.style.display = "none";
    } else {
      respuestaForm.style.display = "flex";
    }
  });
});
