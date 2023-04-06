const mongoose = require('mongoose');


//Actual Schema subject to expansion
// const BidRoomSchema = new mongoose.Schema({
//     uid: {
//         type:String,
//         required:true,
//         unique:true,
//     },
//     title:{
//         type:String,
//         required:true,
//     },
//     description:{
//         type:String,

//     },
//     images:
//     {
//         data: Buffer,
//         contentType: String
//     },
    

// })




//Dummy Schema
const BidRoomSchema = new mongoose.Schema({
    uid:String,
    name: String,
    roomID: String,
});

const BidRoom = mongoose.model('BidRoom', BidRoomSchema);

modules.export = BidRoom;