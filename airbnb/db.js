const { MongoClient } = require('mongodb');

const {user, password, db, url} = require('./connection.json');

const uri = `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let connected = false;

module.exports = {
    connect: function() {
        const progress = new Promise((resolve, reject) => {
            client.connect(err => {
               console.log('✅ Connected to DB');
               connected = true;
               resolve();
            });         
        });
        return progress;
    },
    list: function() {
        if(!connected) {
            console.log('Not connected!');
            process.exit(0);
        }
        const collection = client.db("sample_airbnb").collection("listingsAndReviews");
        return collection.count();
    },
    close: function() {
        if(connected) {
             client.close();
        }
    }
}
