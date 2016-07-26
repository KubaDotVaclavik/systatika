  var socket = io('http://localhost:8081');
  socket.on('reload', function (data) {
      location.reload();
  });