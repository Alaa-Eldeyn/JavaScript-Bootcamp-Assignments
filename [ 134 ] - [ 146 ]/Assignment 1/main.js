let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let IPReg = /\d{4}:\w{2}\d{1}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;

// let IPReg = /\d{4}:\w{2}\d{1}(:\d{4}){5}/ig;

let IPReg = /\w{3,4}/ig;

console.log(IPReg.test(ip)); // true
console.log(ip.match(IPReg)); // ['2001', 'db8', '3333', '4444', '5555', '6666', '7777', '8888']