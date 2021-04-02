const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();



app.use(cookieParser());
app.use(cors());
app.use(express.json());


mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then((result) => {
    app.listen(8000);
    console.log("server runnign at 8000");
}).catch((err) => {
    console.log(err);
})