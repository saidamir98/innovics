const { check, validationResult } = require('express-validator');
const categoryService = require('../services/category');
const { ReE, ReS, LOG } = require('../services/util');

module.exports = {
  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return ReE(res, errors.array({ onlyFirstError: true }), 422);
      }
      const newCategory = {
        title: req.body.title,
        description: req.body.description
      };

      let category = await categoryService.create(newCategory);
      return ReS(res, { payload: category }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async list(req, res) {
    try {
      // const query = req.query;
      let categorys = await categoryService.list();
      return ReS(res, { payload: categorys }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async getById(req, res) {
    try {
      const id = req.params.id;
      let category = await categoryService.getById(id);
      return ReS(res, { payload: category }, 200);
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
      const newCategory = {
        title: req.body.title,
        description: req.body.description
      };
      const id = req.params.id;
      let category = await categoryService.update(id, newCategory);
      return ReS(res, { payload: category }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      let category = await categoryService.delete(id);
      return ReS(res, { payload: category }, 200);
    } catch (err) {
      return ReE(res, err);
    }
  }
};

module.exports.validate = method => {
  switch (method) {
    case 'postCategory': {
      return [check('title', 'Please provide a title').exists()];
    }
  }
};
