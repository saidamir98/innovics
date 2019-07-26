const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  userRoleId: {
    type: Schema.Types.ObjectId,
    ref: 'UserRoles'
  },
  avatar: {
    type: String
  },
  active: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const bcrypt = require('bcryptjs');
UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const saltRounds = require('config').get('saltRounds');
    const salt = await bcrypt.genSalt(saltRounds);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.validatePassword = async function validatePassword(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = User = mongoose.model('Users', UserSchema);
