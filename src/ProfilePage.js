let ProfilePage = {
  render: () => {
    let container = document.querySelector('#page');
    let profileContainer = document.createElement('div');
    profileContainer.id = 'profile_page';
    container.appendChild(profileContainer);

    let title = document.createElement('h1');
    title.id = 'title';
    title.textContent = Users.currentUser().name;
    profileContainer.appendChild(title);
  }
};