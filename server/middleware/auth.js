const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    res.render('auth', { errors: { status: '401', msg: 'No token, authorization is denied' } });
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.render('auth', { errors: { status: '401', msg: 'Token is not valid' } });
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
