let Users = {
  users: [],
  add: (email, password, name) => {
    return Users.users.push({email: email, password: password, name: name});
  },
  exists: (email, password) => {
    return Users.users.length > 0;
  },
  nameOf: (email) => {
    return Users.users[0].name;
  },
  currentUser: () => {
    return Users.users[0];
  }
};
