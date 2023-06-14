const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb+srv://gowthami:gowthami-atlas@blog-cluster.zy7uvvt.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('[server][MongoDB Atlas] Connected to Database'))
    .catch(err => console.error('[server][Mongoose Error] ' + err));
};

module.exports = connectDB;
