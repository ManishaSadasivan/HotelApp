const express= require('express')
const app= express();
var cors = require('cors')

app.use(express.json());
const port=5000;
app.use(cors());
const availablerooms=[
    {roomno:"103",bookedStatus:"No"},
    {roomno:"104",bookedStatus:"No"}
]
const Rooms=[
    {
        id:1,
        Noofseats:"20",
        amenities:"food and welcome drink",
        priceperhour:"1000"
    },{
        id:2,
        Noofseats:"20",
        amenities:"food and welcome drink",
        priceperhour:"1000"
    }
]
const booked=[
    {RoomId:1,bookedStatus:"yes"},
    {RoomId:2,bookedStatus:"no"},
    {RoomId:3,bookedStatus:"yes"}
]

app.get('/Bookedrooms',function(req,res){
res.send(booked);
})

app.post('/createroom',function(req,res){
    Rooms.push(req.body)
res.send("Rooms Created");
console.log(Rooms);

})

app.get('/RoomDetails',function(req,res){
    res.send(Rooms);
})

app.get('/:id',function(req,res){
    const id= req.params;
    const roombooked = booked.find((data)=>data.RoomId===id);
    console.log(booked)
    console.log(roombooked);
    if(roombooked)
    {
        res.send("Room not available to book");
    }
    else{
        
        res.send("available to book")
    }
    
}

)
app.listen(port,console.log(`listeing to ${port}`));