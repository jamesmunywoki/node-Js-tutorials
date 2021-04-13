const OS = require('os')

//get the current user
const user = OS.userInfo()
console.log(user)
//get system uptime in seconds
console.log(`the system uptime is ${OS.uptime()} seconds`)

const currentOS = {
    name: OS.type(),
    release:OS.release(),
    totalMem: OS.totalmem(),
    freeMem:OS.freemem()
}
console.log(currentOS)