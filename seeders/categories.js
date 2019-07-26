const mongoose = require('mongoose');
const Category = require('../models/Category');
const ObjectId = mongoose.Types.ObjectId;

const categoires = [
  {
    _id: ObjectId('fffffffffffffffffffffff0'),
    title: 'category',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    _id: ObjectId('ffffffffffffffffffffffff'),
    title: 'categoryXYZ',
    parentId: ObjectId('fffffffffffffffffffffff0'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff1'),
    title: 'category1',
    parentId: ObjectId('fffffffffffffffffffffff0'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff2'),
    title: 'category2',
    parentId: ObjectId('fffffffffffffffffffffff1'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff3'),
    title: 'category3',
    parentId: ObjectId('fffffffffffffffffffffff2'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff4'),
    title: 'category4',
    parentId: ObjectId('fffffffffffffffffffffff1'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff5'),
    title: 'category5',
    parentId: ObjectId('fffffffffffffffffffffff2'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff6'),
    title: 'category6',
    parentId: ObjectId('fffffffffffffffffffffff1'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    _id: ObjectId('fffffffffffffffffffffff7'),
    title: 'category7',
    parentId: ObjectId('fffffffffffffffffffffff1'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  }
];

module.exports = async () => {
  try {
    await Category.collection.drop();
    await Category.insertMany(categoires);
    console.log('Dummy Categorys inserted');
  } catch (err) {
    console.log('Error on dummy Categorys');
    console.log(err);
    process.exit(1);
  }
};
