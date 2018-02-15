let LoginPage = {
  render: () => {
    let emailInput = document.createElement('input');
    emailInput.id = 'email';
    emailInput.type = 'email';

    let passwordInput = document.createElement('input');
    passwordInput.id = 'password';
    passwordInput.type = 'password';

    let loginButton = document.createElement('button');
    loginButton.id = 'do_login';
    loginButton.textContent = 'Login';

    let container = document.querySelector('#page');
    container.appendChild(emailInput);
    container.appendChild(passwordInput);
    container.appendChild(loginButton);

    loginButton.addEventListener('click', LoginPage.onLogin);
  },
  onLogin: () => {
    let container = document.querySelector('#page');
    container.innerHTML = '';
    ProfilePage.render();
  }

}