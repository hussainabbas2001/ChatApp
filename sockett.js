const io = require( "socket.io" )();
const socketap = {
    io: io
};
const {generateMessage} = require('./public/message');
const {generateLocationMessage} = require('./public/message');
const {addUser} = require('./public/usr')
const {removeUser} = require('./public/usr')
const {getUser} = require('./public/usr')
const {getUserInRoom} = require('./public/usr')


const users = [];

io.on('connection', (socket) => {

  socket.on('join', function({username, roomname}){

    
    const {user}=  addUser({id: socket.id, username: username, roomname : roomname})
    console.log({user})
    
    
     socket.join(roomname)
     
     socket.broadcast.to(roomname).emit("message", generateMessage(`${username} has joined!`) )
    })
   
    socket.on("sendMessage", function(dets){
      io.emit("message", generateMessage(dets))
    })
    socket.on("SendLocation", (info)=>{
      io.emit("msgs",generateLocationMessage(`https://google.com/maps?q=${info.latitude},${info.longitude}`))
    })
    
    socket.on('disconnect', () => {
     const user =  removeUser(socket.id)
     console.log(user)
      if(user){
        io.to(user.roomname).emit("message", generateMessage(`${user.username} has left!`));
      }
    });
  });


module.exports = socketap;

