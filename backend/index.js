const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ourdata')
mongoose.Promise = global.Promise;
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use('/api',require('./Routes/api'))
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
})
app.listen(process.env.port || 3000, () => {
    console.log('running on port 3000')
})