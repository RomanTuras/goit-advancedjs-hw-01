let formData = {
  email: "",
  message: ""
}

var form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;

const localStorageKey = "feedback-form-state";

formData = localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : formData;
message.value = formData.message;
email.value = formData.email;

form.addEventListener("input", (evt) => {
  if (evt.target.type == 'textarea') {
    formData.message = evt.target.value;
  } else if (evt.target.type == 'email') {
    formData.email = evt.target.value;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (formData.email.length === 0 || formData.message.length === 0) {
    alert("Fill please all fields");
    return
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.message = "";
  formData.email = "";
  form.reset();
});

