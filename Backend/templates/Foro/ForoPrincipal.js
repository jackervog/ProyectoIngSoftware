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


const params = new URLSearchParams(window.location.search);
const from = params.get("from");

// valor por defecto
let backUrl = "../Principal/PaginaPrincipal.html";

// asignamos según parámetro
if (from === "PaginaPrincipal") backUrl = "../Principal/PaginaPrincipal.html";
if (from === "Calidad") backUrl = "../Calidad/PaginaCalidad.html";
if (from === "Coordinador") backUrl = "../Coordinador/PaginaCoordinador.html";
if (from === "Escritor") backUrl = "../Escritor/PaginaEscritor.html";
if (from === "Revisor") backUrl = "../Revisor/PaginaRevisor.html";
if (from === "Solicitante") backUrl = "../Solicitante/PaginaSoli.html";
if (from === "TI") backUrl = "../TI/PaginTi.html";



// seteamos el href del botón
document.getElementById("backLink").setAttribute("href", backUrl);