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

app.get('/', (req, res) => {
    res.json({
        msg: "Hello World!"
    });
});

app.listen(PORT, () => console.log(`[server] Server up and running @${PORT}`))