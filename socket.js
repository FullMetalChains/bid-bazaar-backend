const socketio = require('socket.io')
const http = require('http');

    
    
SocketManager = (app) => {
    console.log("Working")
    const server=http.createServer(app);
    server.listen(process.env.PORT,()=>{
        console.log("Server up and running")
    })
    const io=socketio(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })
    var bid = 0, name = "NOONE";
    io.on('connection', (socket)=>{
        console.log(`${socket.id}`)

        socket.on('getFormData', (obj) =>{
            var newbid = parseInt(obj.bid)
            console.log(newbid > bid)
            if(newbid > bid){
                bid = newbid
                name = obj.name
                console.log(obj);
                console.log(bid)
                io.sockets.emit('broadcast', obj)
            }
        })


        socket.on('requestdata', ()=>{
            io.sockets.emit('receivedata',  {name:name, bid:bid })
        })

        socket.on('disconnect', ()=>{
            console.log("User has disconnected")
        })

        socket.on('connect-to-room', (room, cb) =>{
            socket.join(room)
            cb(`Joined ${room}`)
        })

    })
    

}

module.exports = SocketManager