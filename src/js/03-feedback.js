import throttle from "lodash.throttle";

  const form = document.querySelector('.feedback-form');
  const textarea = document.querySelector('textarea');
  const email = document.querySelector('[type="email"]')

  const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  form.addEventListener('submit', onFormSubmit);
  form.addEventListener('input', throttle(onFormInput, 500));

  delayedMessage();

  function onFormSubmit(evt){ 
  evt.preventDefault();

  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
};

function onFormInput(evt){
  formData.email = email.value;
  formData.message = textarea.value;
  console.log(email.value);
  console.log(textarea.value);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function delayedMessage(){
  const saveValue = JSON.parse(localStorage.getItem('feedback-form-state'));

  if(saveValue){
    email.value = saveValue.email || '';
    textarea.value = saveValue.message || '';
  }
};
