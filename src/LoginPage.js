let container = document.querySelector('#page');

let LoginPage = {
  render: () => {
    let emailInput = document.createElement('input');
    emailInput.id = 'email';
    emailInput.type = 'email';
    container.appendChild(emailInput);

    let passwordInput = document.createElement('input');
    passwordInput.id = 'password';
    passwordInput.type = 'password';
    container.appendChild(passwordInput);

    let messageDisplay = document.createElement('p');
    messageDisplay.id = 'message';
    container.appendChild(messageDisplay);

    let loginButton = document.createElement('button');
    loginButton.id = 'do_login';
    loginButton.textContent = 'Login';
    container.appendChild(loginButton);

    loginButton.addEventListener('click', LoginPage.onLogin);
  },
  clearPage: () => {
    container.innerHTML = '';
  },
  onLogin: () => {
    let email = container.querySelector('#email').value;
    let password = container.querySelector('#password').value;
    let message = container.querySelector('#message');
    if (Users.exists(email, password)) {
      console.log('exists');
      LoginPage.clearPage();
      ProfilePage.render();
    } else {
      message.textContent = 'Invalid credentials';
      console.log(message.textContent);
    }


  }
}
