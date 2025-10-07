const editPageBtn = document.getElementById('editPageBtn');
const saveBtn = document.getElementById('saveChanges');

editPageBtn.addEventListener('click', () => {
  document.body.classList.add('editing');
  saveBtn.style.display = 'inline-block';
});

function editText(elementId) {
  const el = document.getElementById(elementId);
  const newText = prompt("Editar contenido:", el.innerText);
  if (newText !== null) el.innerText = newText;
}

function editBanner() {
  const banner = document.getElementById('bannerImg');
  const newUrl = prompt("Ingrese la URL de la nueva imagen del banner:", banner.src);
  if (newUrl) banner.src = newUrl;
}

function saveChanges() {
  alert("Cambios guardados (solo en la página actual, necesitas backend para guardar realmente).");
  document.body.classList.remove('editing');
  saveBtn.style.display = 'none';
}
