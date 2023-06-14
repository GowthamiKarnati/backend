const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middleware
app.use(cors());

// Constants
const PORT = process.env.PORT || 3333;

// configuration
mongoose.connect('mongodb+srv://gowthami:gowthami-atlas@blog-cluster.zy7uvvt.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('[server][MongoDB Atlas] Connected to Database'))
    .catch(err => console.error('[server][Mongoose Error] ' + err));

const newSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Test = mongoose.model('test', newSchema);

app.get('/', (req, res) => {
    res.json({
        msg: "Hello World!"
    });
});

app.get('/test', (req, res) => {
    const newData = new Test({
        username: "Dhamareshwar",
        password: "123456"
    });

    newData.save()
        .then(data =>{
            console.log('Data Saved');
            res.json(data)
        })
        .catch(err => {
            console.error('mongoose save error ' + err);
            res.json('Something error')
        })
})

app.listen(PORT, () => console.log(`[server] Server up and running @${PORT}`))