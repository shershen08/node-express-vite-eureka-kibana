const {port} = require('./connection.json');
 
const Eureka = require('eureka-js-client').Eureka;
 
const client = new Eureka({
  // application instance information
  instance: {
    app: 'AirBNB-jqservice',
    hostName: 'localhost',
    //ipAddr: 'localhost',
    port,
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      name: 'default',
    },
  },
  eureka: {
    // eureka server host / port
    host: 'localhost',// '192.168.99.100',
    port: 8761,
  },
});

client.logger.level('debug');

module.exports = {
    connect: function() {
       client.start();
    },
    stop: function() {
      client.stop();
    }
}
