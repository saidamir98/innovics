const Startup = require('../models/Startup');

function validateId(id) {
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    const err = new Error('Invalid Startup id (' + id + ')!');
    err.status = 404;
    throw err;
  }
}

function notFoundError(id) {
  const err = new Error(`Startup with id(${id}) not found!`);
  err.status = 404;
  throw err;
}

module.exports = {
  async create(newProduct) {
    try {
      let savedProduct = await Startup.create(newProduct);
      return savedProduct;
    } catch (err) {
      throw err;
    }
  },

  async list() {
    try {
      return await Startup.find();
    } catch (err) {
      throw err;
    }
  },

  async getById(id) {
    try {
      validateId(id);
      let startup = await Startup.findById(id);
      if (!startup) {
        notFoundError(id);
      }
      return startup;
    } catch (err) {
      throw err;
    }
  },

  async getByUserId(userId) {
    try {
      let startups = await Startup.find({ userID });
      return startups;
    } catch (err) {
      throw err;
    }
  },

  async update(id, newProduct) {
    try {
      validateId(id);
      let startup = await Startup.findByIdAndUpdate(id, newProduct, { new: true });
      if (!startup) {
        notFoundError(id);
      }
      return startup;
    } catch (err) {
      throw err;
    }
  },

  async delete(id) {
    try {
      validateId(id);
      let startup = await Startup.findByIdAndRemove(id);
      if (!startup) {
        notFoundError(id);
      }
      return startup;
    } catch (err) {
      throw err;
    }
  }
};
