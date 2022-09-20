const express=require('express');
const mongoose= require('mongoose');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const db = require('./config').get(process.env.NODE_ENV);
const api = require('./routes/api');

require('dotenv').config();

const app = express();
const port = process.env.PORT|5000;
app.listen(port);
console.log(`Server Started on http://127.0.0.1:${port}`);

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cookieParser());

api(app);

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});