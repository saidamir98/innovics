const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRoleSchema = new Schema({
  role: {
    type: String,
    unique: true,
    required: true
  },
  permissionLevel: {
    type: Number,
    required: true
  }
});

module.exports = UserRole = mongoose.model('UserRoles', UserRoleSchema);
