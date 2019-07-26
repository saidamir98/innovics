const Category = require('../models/Category');

function validateId(id) {
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    const err = new Error('Invalid Category id (' + id + ')!');
    err.status = 404;
    throw err;
  }
}

function notFoundError(id) {
  const err = new Error(`Category with id(${id}) not found!`);
  err.status = 404;
  throw err;
}

module.exports = {
  async create(newCategory) {
    try {
      let savedCategory = await Category.create(newCategory);
      return savedCategory;
    } catch (err) {
      throw err;
    }
  },

  async list() {
    try {
      return await Category.find();
    } catch (err) {
      throw err;
    }
  },

  async getById(id) {
    try {
      validateId(id);
      let category = await Category.findById(id);
      if (!category) {
        notFoundError(id);
      }
      return category;
    } catch (err) {
      throw err;
    }
  },

  async update(id, newCategory) {
    try {
      validateId(id);
      let category = await Category.findByIdAndUpdate(id, newCategory, { new: true });
      if (!category) {
        notFoundError(id);
      }
      return category;
    } catch (err) {
      throw err;
    }
  },

  async delete(id) {
    try {
      validateId(id);
      let category = await Category.findByIdAndRemove(id);
      if (!category) {
        notFoundError(id);
      }
      return category;
    } catch (err) {
      throw err;
    }
  }
};
