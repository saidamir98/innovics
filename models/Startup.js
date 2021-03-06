const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StartupSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  fileLinks: [
    {
      type: String
    }
  ],
  categories: [
    {
      type: String
    }
  ],
  pRequest: {
    type: String
  },
  status: {
    type: String
  },
  viewedNum: {
    type: Number,
    default: 0
  }
  // ,
  // rating: {
  //   totalSum: {
  //     type: Number,
  //     default: 0
  //   },
  //   totalNum: {
  //     type: Number,
  //     default: 0
  //   },
  //   totalRate: {
  //     type: Number
  //   },
  //   raters: [
  //     {
  //       userId: {
  //         type: Schema.Types.ObjectId,
  //         ref: 'Users',
  //         required: true,
  //        // unique: true
  //       },
  //       rate: {
  //         type: Number,
  //         required: true
  //       }
  //     }
  //   ]
  // },
  // StartupComments: [
  //   {
  //     userId: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'Users',
  //       required: true
  //     },
  //     text: {
  //       type: String,
  //       required: true
  //     }
  //   }
  // ]
});

module.exports = Startup = mongoose.model('Startups', StartupSchema);
