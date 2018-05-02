console.log(__filename);
const events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('hhh', (value) => {
    console.log(`hello ${value}`);
});

eventEmitter.emit('hhh', 'dottie');

import {EventNames, Directions} from './constant.interface';
console.log(EventNames.SendResult);
console.log(Directions.UP);