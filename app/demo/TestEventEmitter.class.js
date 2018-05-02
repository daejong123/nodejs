"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(__filename);
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('hhh', function (value) {
    console.log("hello " + value);
});
eventEmitter.emit('hhh', 'dottie');
var constant_interface_1 = require("./constant.interface");
console.log(constant_interface_1.EventNames.SendResult);
console.log(0);
//# sourceMappingURL=TestEventEmitter.class.js.map