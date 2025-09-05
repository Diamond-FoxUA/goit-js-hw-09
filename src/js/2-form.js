const formData = { email: "", message: "" };
const keyStorage = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

loadFormData();

formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', handleSubmit)

function handleInput(event) {
  if (event.target.name) {
    formData[event.target.name] = event.target.value.trim();
  }
  localStorage.setItem(keyStorage, JSON.stringify(formData));
}


function loadFormData() {
  const savedData = localStorage.getItem(keyStorage);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    formEl.elements.email.value = parsedData.email || '';
    formEl.elements.message.value = parsedData.message || '';

    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted data: ", formData);

  localStorage.removeItem(keyStorage);
  formData.email = "";
  formData.message = "";
  formEl.reset();
}