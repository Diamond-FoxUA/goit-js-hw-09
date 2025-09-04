const formData = { email: "", message: "" };
const keyStorage = 'feedback-form-state';

const formEL = document.querySelector('.feedback-form');

formEL.addEventListener('input', inputHandler);

function inputHandler(event) {
  if (event.target.name) {
    formData[event.target.name] = event.target.value.trim();
  }
  localStorage.setItem(keyStorage, formData);
}

