const express=require('express');
const mongoose= require('mongoose');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const db = require('./config').get(process.env.NODE_ENV);
const User = require('./models/users')
const {auth} =require('./middlewares/auth');
const {register, login, profile, logout}  = require('./controllers/auth');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cookieParser());

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});

app.get('/', function(request, response) {
    response.status(200).send('Welcome to API');
})

// Authentication
app.post('/api/register', register);
app.post('/api/login', login);
app.get('/api/profile', auth, profile);
app.get('/api/logout', auth, logout);

app.listen(5000);

console.log("Server Started on http://127.0.0.1:5000");