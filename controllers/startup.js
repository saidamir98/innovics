const { check, validationResult } = require('express-validator');
const startupService = require('../services/startup');
const { ReE, ReS, LOG } = require('../services/util');

module.exports = {
  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return ReE(res, errors.array({ onlyFirstError: true }), 422);
      }

      const newStartup = {
        userId: req.user.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        websiteName: req.body.websiteName,
        websiteUrl: req.body.websiteUrl,
        fileLinks: req.body.fileLinks,
        categories: req.body.categories,
        pRequest: req.body.pRequest
      };

      let startup = await startupService.create(newStartup);
      return ReS(res, { payload: startup }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async list(req, res) {
    try {
      // const query = req.query;
      let startups = await startupService.list();
      return ReS(res, { payload: startups }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async getById(req, res) {
    try {
      const id = req.params.id;
      let startup = await startupService.getById(id);
      return ReS(res, { payload: startup }, 200);
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

      const newStartup = {
        userId: req.user.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        websiteName: req.body.websiteName,
        websiteUrl: req.body.websiteUrl,
        fileLinks: req.body.fileLinks,
        categories: req.body.categories,
        pRequest: req.body.pRequest
      };

      const id = req.params.id;
      let startup = await startupService.update(id, newStartup);
      return ReS(res, { payload: startup }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      let startup = await startupService.delete(id);
      return ReS(res, { payload: startup }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  }
};

module.exports.validate = method => {
  switch (method) {
    case 'postStartup': {
      return [check('websiteName', 'Please provide a Startup websiteName').exists()];
    }
  }
};
