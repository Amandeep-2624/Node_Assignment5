const userModel = require('../models/userModel');

exports.getUsers = (req, res) => {
  userModel.getUsers((err, users) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
    if (users.length === 0) {
      res.render('users', { users: [], message: 'No users found' });
    } else {
      res.render('users', { users });
    }
  });
};

exports.createUser = (req, res) => {
  const { username } = req.body;
  userModel.addUser(username, (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
    res.redirect('/users');
  });
};
