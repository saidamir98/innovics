const mongoose = require('mongoose');
const UserRole = require('../models/UserRole');
const ObjectId = mongoose.Types.ObjectId;

const userRoles = [
  {
    _id: ObjectId('ffffffffffffffffffffffff'),
    role: 'admin',
    permissionLevel: '100'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff1'),
    role: 'vendor',
    permissionLevel: '50'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff2'),
    role: 'customer',
    permissionLevel: '100'
  }
];

module.exports = async () => {
  try {
    await UserRole.collection.drop();
    await UserRole.insertMany(userRoles);
    console.log('Dummy UserRoles inserted');
  } catch (err) {
    console.log('Error on dummy UserRoles');
    console.log(err);
    process.exit(1);
  }
};
