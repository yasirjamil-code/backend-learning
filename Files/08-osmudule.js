const os = require("os");

//userInfo is here
const user = os.userInfo();
// console.log(user);

//user uptime
// console.log(`the user uptime is ${os.uptime()} second`);

//current os

const currentOs = {
  name: os.type(),
  release: os.release,
  totalmem: os.totalmem,
  freemem: os.freemem,
};

console.log(currentOs);
