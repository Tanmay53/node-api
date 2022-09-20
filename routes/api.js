const {register, login, profile, logout}  = require('../controllers/authController');
const {auth} =require('./../middlewares/auth');

module.exports = function (app) {
    // Welcome
    app.get('/', function(request, response) {
        response.status(200).send('Welcome to API');
    })

    // Authentication
    app.post('/api/register', register);
    app.post('/api/login', login);
    app.get('/api/profile', auth, profile);
    app.get('/api/logout', auth, logout);
}