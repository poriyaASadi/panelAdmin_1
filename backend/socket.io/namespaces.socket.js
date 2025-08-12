const NamespaceModel = require("./../models/Chat");
const UserModel = require("./../models/User");
const path = require("path");
const fs = require("fs");

exports.initConnection = (io) => {
  io.on("connection", async (socket) => {
    const namespaces = await NamespaceModel.find({}).sort({ _id: -1 });
    socket.emit("namespaces", namespaces);
  });
};

exports.getNamespacesRooms = async (io) => {
  const namespaces = await NamespaceModel.find({}).lean();

  namespaces.forEach((namespace) => {
    io.of(namespace.href).on("connection", async (socket) => {
      let mainNamespace = await NamespaceModel.findOne({
        _id: namespace._id,
      });

      getMessage(io, socket);
      getLocation(io, socket);
      getMedia(io, socket);

      socket.emit("namespaceRooms", mainNamespace.rooms);

      socket.on("joining", async (newRoom) => {
        const lastRoom = Array.from(socket.rooms)[1];

        mainNamespace = await NamespaceModel.findOne({
          _id: namespace._id,
        });

        if (lastRoom) {
          socket.leave(lastRoom);
          await getRoomOnlineUsers(io, mainNamespace.href, lastRoom);
        }

        socket.join(newRoom);
        await getRoomOnlineUsers(io, mainNamespace.href, newRoom);

        const roomInfo = mainNamespace.rooms.find(
          (room) => room.title === newRoom
        );
        socket.emit("roomInfo", roomInfo);

        socket.on("disconnect", async () => {
          await getRoomOnlineUsers(io, mainNamespace.href, newRoom);
        });
      });
    });
  });
};

const getMessage = async (io, socket) => {
  socket.on("newMsg", async (data) => {
    const { message, roomName, sender } = data;

    const namespace = await NamespaceModel.findOne({ "rooms.title": roomName });

    await NamespaceModel.updateOne(
      { _id: namespace._id, "rooms.title": roomName },
      {
        $push: {
          "rooms.$.messages": {
            sender,
            message,
          },
        },
      }
    );

    io.of(namespace.href).in(roomName).emit("confirmMsg", data);
  });

  detectIsTyping(io, socket);
};

const detectIsTyping = async (io, socket) => {
  socket.on("isTyping", async (data) => {
    const { userID, roomName, isTyping } = data;
    const namespace = await NamespaceModel.findOne({ "rooms.title": roomName });
    const user = await UserModel.findOne({ _id: userID });
    console.log(namespace);

    io.of(namespace.href)
      .in(roomName)
      .emit("isTyping", { isTyping, username: user.username });

    if (!isTyping) {
      await getRoomOnlineUsers(io, namespace.href, roomName);
    }
  });
};

const getRoomOnlineUsers = async (io, href, roomName) => {
  const onlineUsers = await io.of(href).in(roomName).allSockets();
  console.log(onlineUsers);
  io.of(href)
    .in(roomName)
    .emit("onlineUsersCount", Array.from(onlineUsers).length);
};

const getLocation = (io, socket) => {
  socket.on("newLocation", async (data) => {
    const { roomName, sender, location } = data;

    const namespace = await NamespaceModel.findOne({ "rooms.title": roomName });

    await NamespaceModel.updateOne(
      {
        _id: namespace._id,
        "rooms.title": roomName,
      },
      {
        $push: {
          "rooms.$.locations": {
            sender,
            x: location.x,
            y: location.y,
          },
        },
      }
    );

    io.of(namespace.href).in(roomName).emit("confirmLocation", data);
  });
};

const getMedia = (io, socket) => {
  socket.on("newMedia", async (data) => {
    console.log("New Media ->", data);
    const { filename, file, sender, roomName } = data;
    const namespace = await NamespaceModel.findOne({ "rooms.title": roomName });
    const ext = path.extname(filename);
    const mediaPath = `uploads/${String(Date.now() + ext)}`;

    fs.writeFile(`public/${mediaPath}`, file, async (err) => {
      if (!err) {
        await NamespaceModel.updateOne(
          {
            _id: namespace._id,
            "rooms.title": roomName,
          },
          {
            $push: {
              "rooms.$.medias": {
                sender,
                path: mediaPath,
              },
            },
          }
        );

        io.of(namespace.href).in(roomName).emit("confirmMedia", data);
      } else {
        // Error Emit
      }
    });
  });
};
