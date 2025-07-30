document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const nameInput = form.name;
  const emailInput = form.email;
  const messageInput = form.message;

  const successMsg = document.createElement('p');
  successMsg.id = 'success-message';
  successMsg.style.color = 'green';
  form.appendChild(successMsg);

  // Create error elements
  const nameError = document.createElement('p');
  const emailError = document.createElement('p');
  const messageError = document.createElement('p');

  [nameError, emailError, messageError].forEach(el => {
    el.style.color = 'red';
    el.style.fontSize = '14px';
  });

  nameInput.parentElement.appendChild(nameError);
  emailInput.parentElement.appendChild(emailError);
  messageInput.parentElement.appendChild(messageError);

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    successMsg.textContent = '';
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let valid = true;

    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      valid = false;
    }

    if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    }

    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Please enter your message.';
      valid = false;
    }

    if (valid) {
      successMsg.textContent = 'Your message has been sent. Thank you!';
      form.reset();
    }
  });
});
