var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');
var chokidar = require('chokidar');

app.listen(8081);


io.on('connection', function (socket) {
    chokidar.watch('../', {ignored: /[\/\\]\hotreload/}).on('change', (path) => {
        socket.emit('reload', { path: path });
    });
});