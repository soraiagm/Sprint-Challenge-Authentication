const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../secrets.js');

const Users = require('../users/model.js');

// registration successful //
router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8); 
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// login is successful //
router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        
        const token = signToken(user); 
      
        res.status(200).json({ token }); 
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function signToken(user) {
  const payload = {
    user
  };

  const secret = "ist it secret, is it safe?"

  const options = {
    expiresIn: "1d"
  }

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
