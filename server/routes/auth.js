var express = require('express');
var router = express.Router();

const auth = require('../middleware/auth');
const User = require('../models/User');

/* GET users listing. */
router.get('/', auth, async function(req, res, next) {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
