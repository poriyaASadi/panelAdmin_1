const { initConnection, getNamespacesRooms } = require("./namespaces.socket");

module.exports = socketHandler = (io) => {
  initConnection(io);
  getNamespacesRooms(io);
};
