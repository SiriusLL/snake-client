const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  
  conn.on("connect", function(){
    console.log('successfully connected to game server');
    //write name on snake
    conn.write('Name: DJB');
    // //move up unless facing down
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 100);
    // //move left unless facing right
    // setInterval(() => {
    //   conn.write('Move: left');
    // }, 100);
    // //move down unless facing up
    // setInterval(() => {
    //   conn.write('Move: down');
    // }, 100);
    // //move right unless facing left
    // setInterval(() => {
    //   conn.write('Move: right');
    // }, 100);
  })

  conn.on("data", (data) => {
    console.log(data);
    
  })
  return conn;
}

module.exports = connect;