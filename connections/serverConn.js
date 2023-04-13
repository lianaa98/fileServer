const net = require('net');
const { port } = require('../constants/constants');
const requestingData = require('../fileRequest');

const servConnect = function() {

  const server = net.createServer();

  server.on('connection', (client) => {

    client.setEncoding('utf8');

    client.on('data', (text) => {
      console.log("Client says: ", text);
      if (text.startsWith('RequestFile: ')) {

        // trimming the weird stuff around file path, then find the file!
        const file = text.replace(/^\n|\n$/g, '').replace(/RequestFile: /, '');
        console.log(`requesting file: ${file}...`);
        requestingData(client, file);

      }
    });
  });
  server.listen(port, () => {
    console.log(`Server is listening on port=${port}`);
  });
};


module.exports = servConnect;