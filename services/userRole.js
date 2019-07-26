const UserRole = require('../models/UserRole');

function validateId(id) {
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    const err = new Error('Invalid UserRole id (' + id + ')!');
    err.status = 404;
    throw err;
  }
}

function notFoundError(id) {
  const err = new Error(`UserRole with id(${id}) not found!`);
  err.status = 404;
  throw err;
}

module.exports = {
  async create(newUserRole) {
    try {
      let savedUserRole = await UserRole.create(newUserRole);
      return savedUserRole;
    } catch (err) {
      throw err;
    }
  },

  async list() {
    try {
      return await UserRole.find();
    } catch (err) {
      throw err;
    }
  },

  async getById(id) {
    try {
      validateId(id);
      let userRole = await UserRole.findById(id);
      if (!userRole) {
        notFoundError(id);
      }
      return userRole;
    } catch (err) {
      throw err;
    }
  },

  async update(id, newUserRole) {
    try {
      validateId(id);
      let userRole = await UserRole.findByIdAndUpdate(id, newUserRole, { new: true });
      if (!userRole) {
        notFoundError(id);
      }
      return userRole;
    } catch (err) {
      throw err;
    }
  },

  async delete(id) {
    try {
      validateId(id);
      let userRole = await UserRole.findByIdAndRemove(id);
      if (!userRole) {
        notFoundError(id);
      }
      return userRole;
    } catch (err) {
      throw err;
    }
  }
};
