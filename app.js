require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require("./routes/route");
const socketIo = require('socket.io')
const  http = require('http');

const Multer = require('multer');
const path = require('path');
const defaultPath = './public/uploads';

const app = express();
const port = process.env.PORT;
app.use(cors());

let db = require('./knexfile');
let environment = process.env.NODE_ENV;
global.knex = require('knex')(db[environment]);

let storage = Multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, defaultPath);
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    }
});

let upload = Multer({ storage: storage });
app.use(upload.any());

app.use((req,res,next) => {
    console.log(req.path, new Date());
    next();
})

const server = http.createServer(app);
const io = socketIo(server,{
    cors : {
        origin : '*',
        credentials : true
    }
});

io.on('connection',(socket) => {
    global.socket = socket;
})

app.use("/api",router);

server.listen(port,()=>{
    console.log("Port is up",port)
})

