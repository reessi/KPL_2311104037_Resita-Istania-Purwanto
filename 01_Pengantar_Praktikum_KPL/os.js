import os from "os";

console.info(os.platform);
console.info(os.arch());
console.info(cpus());
console.info(uptime());
console.info(os.totalmen());
console.info(freemen());
console.table(networkInterfaces());