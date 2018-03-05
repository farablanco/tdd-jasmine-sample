let Users = {
  users: [],
  add: (email, password, name) => {
    return Users.users.push({email: email, password: password, name: name});
  },
  clearUsers: () => {
    Users.users = [];
  },
  exists: (email, password) => {
    let idx = Users.users.findIndex(
        (u) => (u.email === email && u.password === password));
    return idx > -1;
  },
  nameOf: (email) => {
    return Users.users[0].name;
  },
  currentUser: () => {
    return Users.users[0];
  }
};
