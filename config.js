const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'abcdasldfj',
        DATABASE: 'mongodb://localhost:27017/node-api'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}