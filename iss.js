const request = require('request');

const fetchMyIP = function(callback) { 
    // use request to fetch IP address from JSON API
    const url = `https://api.ipify.org?format=json`;
    request(url, (error, response, ip) => {
      if (error) {
        let error = this.error;
        return callback(error, null);
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${ip}`;
        callback(Error(msg), null);
        return;
      }
      const data = JSON.parse(ip);
      return callback(null, data);
  });
}
    
  
  module.exports = { fetchMyIP };

