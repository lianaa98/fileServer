const fs = require('fs');

const requestingData = function(client, filePath) {

  if (!fs.existsSync(filePath)) {
    return client.write("File does not exist...");
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      client.write("Reading error: ", err);
      return;
    }
    console.log("Found file! Sending to client!");
    client.write(`${filePath}: ${data}`);
  })

};

module.exports = requestingData;