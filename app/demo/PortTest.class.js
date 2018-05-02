var serialport = require('serialport');
serialport.list(function (err, ports) {
    if (err) {
        console.log(err);
    }
    ports.forEach(function (port) {
        console.log(port.comName);
        console.log(port);
        console.log(JSON.stringify(port));
        console.log(JSON.parse(JSON.stringify(port)));
    });
});
//# sourceMappingURL=PortTest.class.js.map