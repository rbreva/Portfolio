const form = document.getElementById('form');

const formBtn = document.getElementById('form_btn');
const msjAlert = document.querySelector('.msj_alert');

function removeAlert() {
  setTimeout(() => {
    msjAlert.classList.add('hidden');
    msjAlert.innerHTML = '';
  }, 3000);
}

function checkEmail(emailaddress) {
  return emailaddress === emailaddress.toLowerCase();
}

/* eslint-disable */
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* eslint-enable */
function validateEmail(emailaddress) {
  if (emailRegex.test(emailaddress)) {
    return true;
  }
  return false;
}

function messageSent() {
  form.submit();

  msjAlert.classList.remove('hidden');
  msjAlert.innerHTML = 'Message Sent';
  removeAlert();

  document.getElementById('fullname').value = '';
  document.getElementById('emailaddress').value = '';
  document.getElementById('textareaForm').value = '';

  localStorage.removeItem('formData');
}

formBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const fullname = document.getElementById('fullname').value;
  const emailaddress = document.getElementById('emailaddress').value;
  const textareaForm = document.getElementById('textareaForm').value;

  if (fullname === '') {
    msjAlert.classList.remove('hidden');
    msjAlert.innerHTML = 'Full Name is required';
    removeAlert();
    return false;
  }
  if (emailaddress === '') {
    msjAlert.classList.remove('hidden');
    msjAlert.innerHTML = 'Email is required';
    removeAlert();
    return false;
  }
  if (!checkEmail(emailaddress)) {
    msjAlert.classList.remove('hidden');
    msjAlert.innerHTML = 'Email must be lowercase';
    removeAlert();
    return false;
  }
  if (validateEmail(emailaddress) === false) {
    msjAlert.classList.remove('hidden');
    msjAlert.innerHTML = 'Please enter a correct email address format';
    removeAlert();
    return false;
  }
  if (textareaForm === '') {
    msjAlert.classList.remove('hidden');
    msjAlert.innerHTML = 'All fields are required';
    removeAlert();
    return false;
  }

  return messageSent();
});
