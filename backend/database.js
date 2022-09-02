const mongoose = require('mongoose');

let database;

const connect = async() => {
    if(database) return;

        const URL = process.env.MONGODB_URL;

        await mongoose.connect(URL).then((connection) => {
            database = connection;
            console.log('Databse Synced');
        }).catch((error)=> {
            console.log(error);
        })
}

module.exports.connect = connect;