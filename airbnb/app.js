const db = require('./db.js');
const eureka = require('./eureka.js');
const apm = require('./kibana.js');

const port = process.env.PORT || 3001;

apm.start();
eureka.connect();

db.connect().then(() => {
    db.list().then(data => {
        console.log(data)
    })
})

//TODO on shutdown
//eureka.stop();

