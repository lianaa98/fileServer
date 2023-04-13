const net = require('net');
const { host, port } = require('../constants/constants');

const clientConn = function() {
  const connection = net.createConnection({
    port: port,
    host: host
  });

  connection.setEncoding('utf8');

  process.stdin.on('data', (data) => {
    connection.write(data);
  });

  connection.on('connect', () => {
    console.log(`Yay! Connected to server! \nType "RequestFile: " to have server search for specific file :)`);
  });

  connection.on('data', (data) => {
    console.log("From server - \n", data);
  });

  return connection;
};

module.exports = clientConn;