const express = require('express');
const http = require('http');
const socket = require('socket.io');
const NeDB = require('nedb');

const app = express();
const server = http.Server(app);
const io = socket(server);
const port = process.env.PORT || 8088;

const db = new NeDB({
  filename: 'messages.db',
  autoload: true
});

app.use(express.static('public'));
server.listen(port);

app.get('/all-messages', (req, res) =>
  db.find({})
    .sort({timestamp: 1})
    .exec((err, docs) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(docs);
      }
    })
);

io.on('connection', socket => 
  socket.on('new-message', msg => {
    db.insert(msg, (err, newDoc) => {
      if (err) {
        console.log(err);
      } else {
        io.emit('new-message', newDoc);
      }
    })
  })
);