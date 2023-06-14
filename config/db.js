const mongoose = require('mongoose');

const connectDB= () =>{
    mongoose.connect('mongodb+srv://user123:user123@cluster0.kj1mvwv.mongodb.net/blog',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

.then(db =>console.log('DB is connected'))
.catch(err => console.log(err));
};

module.exports = connectDB;
