const mongoose = require('mongoose');
const User = require('../models/User');
const ObjectId = mongoose.Types.ObjectId;

const users = [
  {
    _id: ObjectId('ffffffffffffffffffffffff'),
    email: 'email@example.com',
    password: 'qwerty123',
    userRoleId: ObjectId('ffffffffffffffffffffffff'),
    avatar: '//www.gravatar.com/avatar/db3dfd181580347568db62b054b3f5c6?s=400&r=pg&d=mm',
    active: true
  },
  {
    _id: ObjectId('fffffffffffffffffffffff1'),
    email: 'email1@example.com',
    password: 'qwerty123',
    userRoleId: ObjectId('ffffffffffffffffffffffff'),
    avatar: '//www.gravatar.com/avatar/db3dfd181580347568db62b054b3f5c6?s=400&r=pg&d=mm',
    active: true
  },
  {
    _id: ObjectId('fffffffffffffffffffffff2'),
    email: 'email2@example.com',
    password: 'qwerty123',
    userRoleId: ObjectId('ffffffffffffffffffffffff'),
    avatar: '//www.gravatar.com/avatar/db3dfd181580347568db62b054b3f5c6?s=400&r=pg&d=mm',
    active: true
  }
];

const bcrypt = require('bcryptjs');
module.exports = async () => {
  try {
    const saltRounds = require('config').get('saltRounds');
    const salt = await bcrypt.genSalt(saltRounds);

    await Promise.all(
      users.map(async user => {
        user.password = await bcrypt.hash(user.password, salt);
      })
    );

    await User.collection.drop();
    await User.insertMany(users);
    console.log('Dummy Users inserted');
  } catch (err) {
    console.log('Error on dummy Users');
    console.log(err);
    process.exit(1);
  }
};
