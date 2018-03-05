function givenUserExists(email, password, name) {
  Users.clearUsers();
  expect(Users.exists(email, password)).toEqual(false);

  Users.add(email, password, name);

  expect(Users.exists(email, password)).toEqual(true);
  expect(Users.nameOf(email)).toEqual(name);
}

function givenIAmAtTheLoginPage() {
  LoginPage.clearPage();

  // Initially, we will have only one container with id='page'
  let container = document.querySelector('#page');
  expect(container).not.toEqual(null);
  expect(container.innerHTML).toEqual('');  // and no content

  LoginPage.render();

  let emailInput = container.querySelector('#email');
  expect(emailInput.tagName).toEqual('INPUT');
  expect(emailInput.type).toEqual('email');

  let passwordInput = container.querySelector('#password');
  expect(passwordInput.tagName).toEqual('INPUT');
  expect(passwordInput.type).toEqual('password');

  let messageDisplay = container.querySelector('#message');
  expect(messageDisplay.tagName).toEqual('P');


  let loginButton = container.querySelector('#do_login');
  expect(loginButton.tagName).toEqual('BUTTON');
  expect(loginButton.textContent).toEqual('Login');
}

function whenIEnterInTheField(selector, value) {
  let element = document.querySelector(selector);
  expect(element).not.toEqual(null);
  expect(element.value).toEqual('');

  element.value = value;

  let elementAfterChange = document.querySelector(selector);
  expect(element.value).toEqual(value);
};


function whenIClickOn(selector) {
  let element = document.querySelector(selector);
  expect(element).not.toEqual(null);

  element.click();
};

function thenISeeTheProfilePage() {
  // assert login page is gone
  expect(document.querySelector('#email')).toEqual(null);
  expect(document.querySelector('#password')).toEqual(null);
  expect(document.querySelector('#do_login')).toEqual(null);

  // assert profile page is present
  expect(document.querySelector('#page #profile_page')).not.toEqual(null);
  expect(document.querySelector('#page #title')).not.toEqual(null);
};

function thenISeeTextAt(selector, text) {
  let element = document.querySelector(selector);
  expect(element).not.toEqual(null);
  expect(element.textContent).toEqual(text);
}

function givenUserDoesNotExist(email, password, name) {
  expect(Users.exists(email, password)).toEqual(false);
}

function thenIRemainAtTheLoginPage() {
  let emailInput = container.querySelector('#email');
  expect(emailInput.tagName).toEqual('INPUT');
  expect(emailInput.type).toEqual('email');

  let passwordInput = container.querySelector('#password');
  expect(passwordInput.tagName).toEqual('INPUT');
  expect(passwordInput.type).toEqual('password');

  let loginButton = container.querySelector('#do_login');
  expect(loginButton.tagName).toEqual('BUTTON');
  expect(loginButton.textContent).toEqual('Login');
}
