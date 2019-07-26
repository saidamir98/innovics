const User = require('../models/User');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');

function invalidCredentialsError() {
  const err = new Error('Invalid Credentials!');
  err.status = 400;
  throw err;
}

module.exports = {
  async create(newUser) {
    try {
      let count = await User.countDocuments({ email: newUser.email });
      if (count !== 0) {
        const err = new Error('User with email ' + newUser.email + ' already exists!');
        err.status = 409;
        throw err;
      }
      newUser.avatar = gravatar.url(newUser.email, {
        s: '400',
        r: 'pg',
        d: 'mm'
      });
      let savedUser = await User.create(newUser);
      return savedUser;
    } catch (err) {
      throw err;
    }
  },

  async createToken(user) {
    try {
      const payload = {
        user: {
          id: user.id
        }
      };

      const token = jwt.sign(payload, require('config').get('jwtSecret'), {
        expiresIn: require('config').get('jwtExpiresIn')
      });

      if (token) {
        return token;
      } else {
        throw Error('Something went wrong while creating token');
      }
    } catch (err) {
      throw err;
    }
  },

  async me(decodedUser) {
    try {
      let user = await User.findById(decodedUser.id);
      return user;
    } catch (err) {
      throw err;
    }
  },

  async login(credential) {
    try {
      let user = await User.findOne({ email: credential.email }).select('+password');
      if (!user) {
        invalidCredentialsError();
      }
      const isMatch = await user.validatePassword(credential.password);
      if (isMatch) {
        return user;
      }
      invalidCredentialsError();
    } catch (err) {
      throw err;
    }
  }
};
