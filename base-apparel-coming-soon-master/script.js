const input = document.getElementById('input');
const errorIcon = document.getElementById('error-icon');
const button = document.getElementById('button');
const errorText = document.getElementById('error-text');
const successText = document.getElementById('success-text');

button.addEventListener('click', function (event) {
  event.preventDefault();

  errorIcon.style.display = 'none';
  errorText.style.display = 'none';
  successText.style.display = 'none';

  const email = input.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    showError('Please provide an email address');
  } else if (!emailRegex.test(email)) {
    showError('Please provide a valid email');
  } else {
    showSuccess();
  }
});

function showError(message) {
  errorIcon.style.display = 'block';
  errorText.style.display = 'block';
  errorText.textContent = message;
  input.style.borderColor = 'var(--Soft-Red)';
}

function showSuccess() {
  successText.style.display = 'block';
  input.style.borderColor = 'var(--Desaturated-Red)';
}
