const whole = document.querySelector('.container');
const button1 = document.querySelector('.btn');
let emailInput = document.querySelector('.email');
let newMail = document.querySelector('.user-email');
const errorMsg = document.querySelector('.error');
const success = document.querySelector('.sucess-container');
const button2 = document.querySelector('.success-btn');
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function input () {
  newMail.innerHTML = emailInput.value;

  if (!emailRegex.test(emailInput.value)) {
    errorMsg.classList.add('active');
    emailInput.classList.add('active');
  } else {
    whole.style.display = 'none';
    success.style.display = 'block';
  }
};

button1.addEventListener('click', (e) => {
  e.preventDefault();

  input();
});

button2.addEventListener('click', (e) => {
  e.preventDefault();

  whole.style.display = 'flex';
  success.style.display = 'none';
  errorMsg.classList.remove('active');
  emailInput.classList.remove('active');
  emailInput.value = '';
});
