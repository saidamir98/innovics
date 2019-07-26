const jwt = require('jsonwebtoken');
const { ReE } = require('../services/util');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return ReE(res, [{ msg: 'No token, authorization denied' }], 401);
  }
  try {
    const decoded = jwt.verify(token, require('config').get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    return ReE(res, [{ msg: 'Token is not valid' }], 401);
  }
};
