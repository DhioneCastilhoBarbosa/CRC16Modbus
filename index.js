const {crc16} = require('easy-crc');

data = 'SN10052211010718';
checksum = crc16('MODBUS', data);

console.log(checksum.toString(16)); 
