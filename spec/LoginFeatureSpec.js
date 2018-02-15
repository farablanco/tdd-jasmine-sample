describe('Login Feature', () => {
  it('allows to login with correct credentials', () => {

    // ARRANGE
    // Given User with email ‘john@example.org’ and password ‘welcome’ exists
    // And I am at the login page
    let email = 'john@example.org';
    let password = 'welcome';
    let name = 'John Smith';
    givenUserExists(email, password, name);
    givenIAmAtTheLoginPage();

    // ACT
    // When I enter ‘john@example.org’ in the email field
    // And I enter ‘welcome’ in the password field
    // And I click on the submit button
    whenIEnterInTheField('#email', email);
    whenIEnterInTheField('#password', password);
    whenIClickOn('#do_login');

    // ASSERT
    // Then I see the profile page
    // And I see my name as the title of the profile page
    thenISeeTheProfilePage();
    thenISeeTextAt('#title', name);
  });

  xdescribe('when user has different credentials', () => {
    it('does not allow to login with wrong credentials', () => {});
  });

  xdescribe('when there are more than one user', () => {
    it('allows to login with correct credentials', () => {});
  });
});