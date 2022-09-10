const formData = localStorage.getItem('formData');
const fullnamels = document.getElementById('fullname');
const emailaddressls = document.getElementById('emailaddress');
const textareaFormls = document.getElementById('textareaForm');
let dataForm = {
  name: '',
  email: '',
  message: '',
};

function addToLocal() {
  dataForm.name = fullnamels.value;
  dataForm.email = emailaddressls.value;
  dataForm.message = textareaFormls.value;

  const data = JSON.stringify(dataForm);

  localStorage.setItem('formData', data);
}

fullnamels.addEventListener('change', () => {
  addToLocal();
});

emailaddressls.addEventListener('change', () => {
  addToLocal();
});

textareaFormls.addEventListener('change', () => {
  addToLocal();
});

if (formData === null) {
  // console.log('Empty element');
} else {
  dataForm = JSON.parse(formData);

  document.getElementById('fullname').value = dataForm.name;
  document.getElementById('emailaddress').value = dataForm.email;
  document.getElementById('textareaForm').value = dataForm.message;
}
