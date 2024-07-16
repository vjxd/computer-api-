const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => {
        console.error("Error connecting to the database", err);
    });
};

module.exports = connectToDb;
