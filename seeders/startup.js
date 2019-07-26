// const mongoose = require('mongoose');
// const Startup = require('../models/Startup');
// const ObjectId = mongoose.Types.ObjectId;

// const startups = [
//   {
//     _id: ObjectId('ffffffffffffffffffffffff'),
//     categories: [ObjectId('ffffffffffffffffffffffff'), ObjectId('fffffffffffffffffffffff7')],
//     userId: ObjectId('ffffffffffffffffffffffff'),
//     manufactureDetails: {
//       manufacturerId: ObjectId('ffffffffffffffffffffffff'),
//       name: 'manufacturer',
//       logo: 'manufacturer.png',
//       link: 'https://manufacturer.com',
//       modelNumber: 'modelXYZ'
//     },
//     attributes: [
//       {
//         _id: ObjectId('ffffffffffffffffffffffff'),
//         title: 'HDD',
//         text: '4Gb'
//       },
//       {
//         _id: ObjectId('fffffffffffffffffffffff1'),
//         title: 'SSD',
//         text: '240Gb'
//       },
//       {
//         _id: ObjectId('fffffffffffffffffffffff2'),
//         title: 'CPU',
//         text: 'Intel i7 2.4 GHz'
//       }
//     ],
//     options: [
//       {
//         _id: ObjectId('ffffffffffffffffffffffff'),
//         optionType: 'select',
//         title: 'Color',
//         required: true,
//         optionValues: [
//           {
//             _id: ObjectId('ffffffffffffffffffffffff'),
//             soldNum: 0,
//             value: 'red',
//             image: 'product-red.jpg',
//             quantity: 100
//           },
//           {
//             _id: ObjectId('fffffffffffffffffffffff1'),
//             soldNum: 0,
//             value: 'green',
//             image: 'product-green.jpg',
//             quantity: 100
//           },
//           {
//             _id: ObjectId('fffffffffffffffffffffff2'),
//             soldNum: 0,
//             value: 'blue',
//             image: 'product-blue.jpg',
//             quantity: 100
//           }
//         ]
//       }
//     ],
//     pricing: {
//       price: 999900,
//       sale: 0.9,
//       reward: 0.1
//     },
//     shippingDetails: {
//       weight: 1,
//       length: 100,
//       width: 100,
//       height: 10
//     },
//     soldNum: 0,
//     viewedNum: 0,
//     tags: ['best', 'super', 'product'],
//     images: ['product.jpg', 'front.jpg', 'side.jpg'],
//     title: 'Startup title',
//     metaTitle: 'product_meta_title',
//     description:
//       'Startup description - orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     upc: 'product upc',
//     sku: 'product sku',
//     status: 'ENABLED',
//     quantity: 1001
//   },
//   {
//     _id: ObjectId('fffffffffffffffffffffff1'),
//     categories: [ObjectId('fffffffffffffffffffffff2'), ObjectId('fffffffffffffffffffffff1')],
//     userId: ObjectId('fffffffffffffffffffffff1'),
//     manufactureDetails: {
//       manufacturerId: ObjectId('fffffffffffffffffffffff1'),
//       name: 'manufacturer',
//       logo: 'manufacturer.png',
//       link: 'https://manufacturer.com',
//       modelNumber: 'modelXYZ'
//     },
//     attributes: [
//       {
//         title: 'HDD',
//         text: '4Gb'
//       },
//       {
//         title: 'SSD',
//         text: '240Gb'
//       },
//       {
//         title: 'CPU',
//         text: 'Intel i7 2.4 GHz'
//       }
//     ],
//     options: [
//       {
//         optionType: 'select',
//         title: 'Color',
//         required: true,
//         optionValues: [
//           {
//             soldNum: 0,
//             value: 'red',
//             image: 'product-red.jpg',
//             quantity: 100
//           },
//           {
//             soldNum: 0,
//             value: 'green',
//             image: 'product-green.jpg',
//             quantity: 100
//           },
//           {
//             soldNum: 0,
//             value: 'blue',
//             image: 'product-blue.jpg',
//             quantity: 100
//           }
//         ]
//       }
//     ],
//     pricing: {
//       price: 999900,
//       sale: 0.9,
//       reward: 0.1
//     },
//     shippingDetails: {
//       weight: 1,
//       length: 100,
//       width: 100,
//       height: 10
//     },
//     soldNum: 0,
//     viewedNum: 0,
//     tags: ['best', 'super', 'product'],
//     images: ['product.jpg', 'front.jpg', 'side.jpg'],
//     title: 'Startup title',
//     metaTitle: 'product_meta_title',
//     description:
//       'Startup description - orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     upc: 'product upc',
//     sku: 'product sku',
//     status: 'ENABLED',
//     quantity: 1001
//   },
//   {
//     _id: ObjectId('fffffffffffffffffffffff2'),
//     categories: [ObjectId('fffffffffffffffffffffff4'), ObjectId('fffffffffffffffffffffff7')],
//     userId: ObjectId('fffffffffffffffffffffff2'),
//     manufactureDetails: {
//       manufacturerId: ObjectId('fffffffffffffffffffffff2'),
//       name: 'manufacturer',
//       logo: 'manufacturer.png',
//       link: 'https://manufacturer.com',
//       modelNumber: 'modelXYZ'
//     },
//     attributes: [
//       {
//         title: 'HDD',
//         text: '4Gb'
//       },
//       {
//         title: 'SSD',
//         text: '240Gb'
//       },
//       {
//         title: 'CPU',
//         text: 'Intel i7 2.4 GHz'
//       }
//     ],
//     options: [
//       {
//         optionType: 'select',
//         title: 'Color',
//         required: true,
//         optionValues: [
//           {
//             soldNum: 0,
//             value: 'red',
//             image: 'product-red.jpg',
//             quantity: 100
//           },
//           {
//             soldNum: 0,
//             value: 'green',
//             image: 'product-green.jpg',
//             quantity: 100
//           },
//           {
//             soldNum: 0,
//             value: 'blue',
//             image: 'product-blue.jpg',
//             quantity: 100
//           }
//         ]
//       }
//     ],
//     pricing: {
//       price: 999900,
//       sale: 0.9,
//       reward: 0.1
//     },
//     shippingDetails: {
//       weight: 1,
//       length: 100,
//       width: 100,
//       height: 10
//     },
//     soldNum: 0,
//     viewedNum: 0,
//     tags: ['best', 'super', 'product'],
//     images: ['product.jpg', 'front.jpg', 'side.jpg'],
//     title: 'Startup title',
//     metaTitle: 'product_meta_title',
//     description:
//       'Startup description - orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     upc: 'product upc',
//     sku: 'product sku',
//     status: 'ENABLED',
//     quantity: 1001
//   },
//   {
//     _id: ObjectId('fffffffffffffffffffffff3'),
//     categories: [ObjectId('fffffffffffffffffffffff2'), ObjectId('fffffffffffffffffffffff1')],
//     userId: ObjectId('fffffffffffffffffffffff1'),
//     manufactureDetails: {
//       manufacturerId: ObjectId('fffffffffffffffffffffff1'),
//       name: 'manufacturer',
//       logo: 'manufacturer.png',
//       link: 'https://manufacturer.com',
//       modelNumber: 'modelXYZ'
//     },
//     attributes: [
//       {
//         title: 'HDD',
//         text: '4Gb'
//       },
//       {
//         title: 'SSD',
//         text: '240Gb'
//       },
//       {
//         title: 'CPU',
//         text: 'Intel i7 2.4 GHz'
//       }
//     ],
//     options: [
//       {
//         optionType: 'select',
//         title: 'Color',
//         required: true,
//         optionValues: [
//           {
//             soldNum: 0,
//             value: 'red',
//             image: 'product-red.jpg',
//             quantity: 100
//           },
//           {
//             soldNum: 0,
//             value: 'green',
//             image: 'product-green.jpg',
//             quantity: 100
//           },
//           {
//             soldNum: 0,
//             value: 'blue',
//             image: 'product-blue.jpg',
//             quantity: 100
//           }
//         ]
//       }
//     ],
//     pricing: {
//       price: 999900,
//       sale: 0.9,
//       reward: 0.1
//     },
//     shippingDetails: {
//       weight: 1,
//       length: 100,
//       width: 100,
//       height: 10
//     },
//     soldNum: 0,
//     viewedNum: 0,
//     tags: ['best', 'super', 'product'],
//     images: ['product.jpg', 'front.jpg', 'side.jpg'],
//     title: 'Startup title',
//     metaTitle: 'product_meta_title',
//     description:
//       'Startup description - orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     upc: 'product upc',
//     sku: 'product sku',
//     status: 'ENABLED',
//     quantity: 1001
//   }
// ];

// module.exports = async () => {
//   try {
//     await Startup.collection.drop();
//     await Startup.insertMany(products);
//     console.log('Dummy Startups inserted');
//   } catch (err) {
//     console.log('Error on dummy Startups');
//     console.log(err);
//     process.exit(1);
//   }
// };
