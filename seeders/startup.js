const mongoose = require('mongoose');
const Startup = require('../models/Startup');
const ObjectId = mongoose.Types.ObjectId;

const startups = [
  {
    _id: ObjectId('ffffffffffffffffffffffff'),
    userId: ObjectId('ffffffffffffffffffffffff'),
    firstname: 'Firstname',
    lastname: 'Lastname',
    title: 'Title',
    description: 'Description',
    fileLinks: ['product.jpg', 'front.jpg', 'side.jpg'],
    categories: [ObjectId('ffffffffffffffffffffffff'), ObjectId('fffffffffffffffffffffff3')],
    pRequest: 'Need $73854',
    status: 'PENDING',
    viewedNum: 0
  },
  {
    _id: ObjectId('fffffffffffffffffffffff1'),
    userId: ObjectId('fffffffffffffffffffffff1'),
    firstname: 'Firstname',
    lastname: 'Lastname',
    title: 'Title',
    description: 'Description',
    fileLinks: ['product.jpg', 'front.jpg', 'side.jpg'],
    categories: [ObjectId('fffffffffffffffffffffff1'), ObjectId('fffffffffffffffffffffff2')],
    pRequest: 'Need $73854',
    status: 'PENDING',
    viewedNum: 0
  },
  {
    _id: ObjectId('fffffffffffffffffffffff2'),
    userId: ObjectId('ffffffffffffffffffffffff'),
    firstname: 'Firstname',
    lastname: 'Lastname',
    title: 'Title',
    description: 'Description',
    fileLinks: ['product.jpg', 'front.jpg', 'side.jpg'],
    categories: [ObjectId('fffffffffffffffffffffff5'), ObjectId('fffffffffffffffffffffff7')],
    pRequest: 'Need $73854',
    status: 'PENDING',
    viewedNum: 0
  },
  {
    _id: ObjectId('fffffffffffffffffffffff3'),
    userId: ObjectId('ffffffffffffffffffffffff'),
    firstname: 'Firstname',
    lastname: 'Lastname',
    title: 'Title',
    description: 'Description',
    fileLinks: ['product.jpg', 'front.jpg', 'side.jpg'],
    categories: [ObjectId('fffffffffffffffffffffff4'), ObjectId('fffffffffffffffffffffff3')],
    pRequest: 'Need $73854',
    status: 'PENDING',
    viewedNum: 0
  }
];

module.exports = async () => {
  try {
    await Startup.collection.drop();
    await Startup.insertMany(startups);
    console.log('Dummy Startups inserted');
  } catch (err) {
    console.log('Error on dummy Startups');
    console.log(err);
    process.exit(1);
  }
};
