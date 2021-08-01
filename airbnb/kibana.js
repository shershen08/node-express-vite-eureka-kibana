const apm = require('elastic-apm-node').start({
    // Override service name from package.json
    //serviceName: '',
    // Use if APM Server requires a token
    //secretToken: 'ELASTIC_APM_SECRET_TOKEN',
  
    // Use if APM Server uses API keys for authentication
    //apiKey: '',
  
    // Set custom APM Server URL (default: http://localhost:8200)
    //serverUrl: '',
  })

  module.exports ={
    apm
  }