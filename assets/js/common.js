const form = document.getElementById('signup-form');
const popup = document.getElementById('popup-window');
const popupSuccess = document.getElementById('popup-window-success');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const emailSuccessText = document.getElementById('email-success-text');
const dismissButton = document.getElementById('dismiss-button');

function formSubmit(e) {
  e.preventDefault();
  console.log('working')

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  emailSuccessText.innerHTML = data.email;

  console.log(data);

  popup.classList.toggle('hidden');
  popupSuccess.classList.toggle('hidden');
  
}

function checkValid(e) {
    if(emailInput.validity.valid){
        emailError.classList.add('hidden');
    } else {
        emailError.classList.remove('hidden');
    }
}

function dismissForm(){
    popupSuccess.classList.add('hidden');
}

form.addEventListener('submit', formSubmit);
emailInput.addEventListener('input', checkValid);
dismissButton.addEventListener('click', dismissForm);
