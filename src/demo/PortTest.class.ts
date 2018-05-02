const serialport = require('serialport');

serialport.list((err, ports) => {
    if(err) {
        console.log(err)
    }
    ports.forEach(port => {
        console.log(port.comName);
        console.log(port);
        console.log(JSON.stringify(port)); //{"comName":"/dev/tty.Bluetooth-Incoming-Port"}
        console.log(JSON.parse(JSON.stringify(port))); //{ comName: '/dev/tty.Bluetooth-Incoming-Port' }
    })
})

