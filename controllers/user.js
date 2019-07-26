const { check, validationResult } = require('express-validator');
const { ReE, ReS, LOG } = require('../services/util');
const userService = require('../services/user');

module.exports = {
  async register(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return ReE(res, errors.array({ onlyFirstError: true }), 422);
      }

      const newUser = {
        email: req.body.email,
        password: req.body.password
      };

      let user = await userService.create(newUser);
      let token = await userService.createToken(user);
      console.log(token);

      return ReS(res, { payload: token }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async me(req, res) {
    try {
      let user = await userService.me(req.user);

      return ReS(res, { payload: user }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return ReE(res, errors.array({ onlyFirstError: true }), 422);
      }

      const credential = {
        email: req.body.email,
        password: req.body.password
      };

      let user = await userService.login(credential);
      let token = await userService.createToken(user);
      console.log(token);
      return ReS(res, { payload: token }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  }

  // async getById(req, res) {
  //   try {
  //
  //     return ReS(res, { payload: user }, 200);
  //   } catch (err) {
  //     return ReE(res, err);
  //   }
  // },

  // async list(req, res) {
  //   try {
  //
  //     return ReS(res, { payload: user }, 200);
  //   } catch (err) {
  //     return ReE(res, err);
  //   }
  // },

  // async update(req, res) {
  //   try {
  //
  //     return ReS(res, { payload: user }, 200);
  //   } catch (err) {
  //     return ReE(res, err);
  //   }
  // },

  // async delete(req, res) {
  //   try {
  //
  //     return ReS(res, { payload: user }, 200);
  //   } catch (err) {
  //     return ReE(res, err);
  //   }
  // }
};

module.exports.validate = method => {
  switch (method) {
    case 'registerUser': {
      return [
        check('password', 'The password must be 5+ chars long and contain a number')
          .not()
          .isIn(['123', 'password', 'god'])
          .withMessage('Do not use a common word as the password')
          .isLength({ min: 5 })
          .matches(/\d/),
        check('email', 'Please provide a valid email address').isEmail()
      ];
    }
    case 'loginUser': {
      return [
        check('password', 'Please provide a password').exists(),
        check('email', 'Please provide an email address').exists()
      ];
    }
  }
};
