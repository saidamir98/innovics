const { check, validationResult } = require('express-validator');
const userRoleService = require('../services/userRole');
const { ReE, ReS, LOG } = require('../services/util');

module.exports = {
  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return ReE(res, errors.array({ onlyFirstError: true }), 422);
      }
      const newUserRole = {
        role: req.body.role,
        permissionLevel: req.body.permissionLevel
      };

      let userRole = await userRoleService.create(newUserRole);
      return ReS(res, { payload: userRole }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async list(req, res) {
    try {
      // const query = req.query;
      let userRoles = await userRoleService.list();
      return ReS(res, { payload: userRoles }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async getById(req, res) {
    try {
      const id = req.params.id;
      let userRole = await userRoleService.getById(id);
      return ReS(res, { payload: userRole }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async update(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return ReE(res, errors.array({ onlyFirstError: true }), 422);
      }
      const newUserRole = {
        role: req.body.role,
        permissionLevel: req.body.permissionLevel
      };
      const id = req.params.id;
      let userRole = await userRoleService.update(id, newUserRole);
      return ReS(res, { payload: userRole }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      let userRole = await userRoleService.delete(id);
      return ReS(res, { payload: userRole }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  }
};

module.exports.validate = method => {
  switch (method) {
    case 'postUserRole': {
      return [
        check('role', 'Please provide a role').exists(),
        check('permissionLevel', 'Please provide a permissionLevel').exists()
      ];
    }
  }
};
