
const formData = localStorage.getItem('formData');
const fullnamels = document.getElementById('fullname');
const emailaddressls = document.getElementById('emailaddress');
const textareaFormls = document.getElementById('textareaForm');
let dataForm = {
    name: '',
    email: '',
    message: ''
  };

fullnamels.addEventListener('change', () => {
  addToLocal ();
})

emailaddressls.addEventListener('change', () => {
  addToLocal ();
})

textareaFormls.addEventListener('change', () => {
  addToLocal ();
})

function addToLocal (){
  dataForm['name'] = fullnamels.value;
  dataForm['email'] = emailaddressls.value;
  dataForm['message'] = textareaFormls.value;

  const data = JSON.stringify(dataForm);
  //console.log(data);
  localStorage.setItem('formData', data);
}

